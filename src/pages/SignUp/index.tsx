import BtnC from '@/components/CustomButton';
import SignFormItens from '@/components/SignForm/SignFormItens';
import SignImageUpload from '@/components/SignForm/SignImageUpload';
import form from '@/components/SignForm/form';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from '@/components/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
import * as S from './styles';

export default function SignUp() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValues, setInputValues] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  const formRef = useRef(null);

  useEffect(() => {
    formRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true
    })
  }, [currentIndex])

  const handleInputChange = (values, index) => {
    const newValues = [...inputValues];
    newValues[index] = values;
    setInputValues(newValues);
  }

  const areInputsFilled = () => {
    return inputValues[currentIndex]?.every(value => value !== '');
  };

  const scrollTo = async () => {

    if (!areInputsFilled()) {
      alert("pera")
    }


    setCurrentIndex(currentIndex + 1)
  }
  const scrollBackwards = () => {
    if (currentIndex === 0) {
      return
    }
    setCurrentIndex(currentIndex - 1)
  }

  return (
    <S.BackgoundContainer>
      <View style={{ flexDirection: 'row', marginTop: 40, alignItems: "center" }}>
        <TouchableOpacity onPress={() => { navigation.navigate('SignIn' as never), setCurrentIndex(0) }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={theme.COLORS.ICON} size={28} /></TouchableOpacity>
        <S.HeaderText >Cadastro</S.HeaderText>
      </View>

      <ProgressBar currentBar={currentIndex + 1} limitBar={3}/>

      <S.Container>
        {currentIndex <= form.length - 1 ? (
          <>
            <FlatList
              data={form}
              renderItem={({ item, index }) => <SignFormItens item={item} onInputChange={(values) => handleInputChange(values, index)} />}
              initialScrollIndex={0}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              scrollEnabled={false}
              bounces={false}
              keyExtractor={(item) => item.id}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
              })}
              scrollEventThrottle={32}
              ref={formRef}
            />

            <BtnC
              buttonText="Proximo"
              btnColor='#E96181'
              colorText='#FFF'
              disable={!areInputsFilled()}
              additionalStyles={{
                marginTop: 215,
              }}
              onPress={scrollTo}
            />
          </>
        ) : (
          <SignImageUpload />
        )}

      </S.Container>


    </S.BackgoundContainer>
  )
}