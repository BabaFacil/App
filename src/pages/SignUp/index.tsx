import React from 'react'
import { Animated, FlatList, View, TouchableOpacity } from 'react-native'
import Onboarding from '@/components/Onboarding'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from 'styled-components';
import form from '@/components/SignForm/form';
import { ArrowLeft, BookA, ChevronRight, Flag, Info, LogOut, MessageSquareText, Moon, PieChart, Scale, Shield } from 'lucide-react-native';
import * as S from './styles';
import { useState, useRef, useEffect } from 'react';
import SignFormItens from '@/components/SignForm/SignFormItens'

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
        <TouchableOpacity onPress={() => { navigation.navigate('SignIn' as never) }}><ArrowLeft strokeWidth={1} style={{ marginLeft: 10 }} color={theme.COLORS.ICON} size={28} /></TouchableOpacity>
        <S.HeaderText >Cadastro</S.HeaderText>
      </View>

      <S.Container>
        <View>
          <FlatList
            data={form}
            renderItem={({ item }) => <SignFormItens item={item} />}
            initialScrollIndex={0}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEnabled={true}
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            ref={formRef}
          />
        </View>
      </S.Container>


    </S.BackgoundContainer>
  )
}