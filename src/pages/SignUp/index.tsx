import BtnC from '@/components/CustomButton';
import SignFormItens from '@/components/SignForm/SignFormItens';
import form from '@/components/SignForm/form';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, FlatList, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'styled-components';
import * as S from './styles';

export default function SignUp() {
  const navigation = useNavigation();
  const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const formRef = useRef(null);

  useEffect(() => {
    formRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true
    })
  }, [currentIndex])

  const scrollTo = async () => {
    if (currentIndex === form.length - 1) {
      try {
        await AsyncStorage.setItem("@viewedonboarding", "true")
        navigation.navigate('SignIn' as never)
        return
      } catch (e) {
        console.log(e);

      }
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

      <S.Container>
        <FlatList
          data={form}
          renderItem={({ item }) => <SignFormItens item={item} />}
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
          disable = {true}
          additionalStyles={{
            marginTop: 215,
        }}
          onPress={scrollTo}
        />
      </S.Container>


    </S.BackgoundContainer>
  )
}