import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuBar from '../../components/MenuBar'
import KidCards from '../../components/KidCards';
import { MaterialIcons } from '@expo/vector-icons';
import * as S from './styles'

export default function Home() {
  return (
    <S.Container>
      <S.DockGlobal>
        <Text style={{ fontSize: 23 }}>Serviços</Text>
        <S.DockServices>
          {/* Serviços */}
          <S.Services>
            <MaterialIcons name="radar" size={60} color="#ffff" />
            <Text style={{ color: "#ffff", marginTop: 50, left: -5 }}>Buscar Babás</Text>
          </S.Services>

          <S.Services>
            <MaterialIcons name="calendar-month" size={60} color="#ffff" />
            <Text style={{ color: "#ffff", marginTop: 50, left: -5 }}>Agendar Babá</Text>
          </S.Services>
        </S.DockServices>

        <Text style={{ fontSize: 23, marginTop: 60 }}>Crianças</Text>

        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 320 }}>
          <S.DockKids>

            <KidCards nome={'Davi'} idade={'8'} genero={'m'} img={'imgBoy'} />
            <KidCards nome={'Sayori'} idade={'8'} genero={'f'} img={'imgGirl'} />
            <KidCards nome={'Yasmin'} idade={'8'} genero={'f'} img={'imgGirl'} />
            <KidCards nome={'Isabela'} idade={'8'} genero={'f'} img={'imgGirl'} />
            <KidCards nome={'Lucas'} idade={'8'} genero={'m'} img={'imgBoy'} />
            <KidCards nome={'Pedro'} idade={'8'} genero={'m'} img={'imgBoy'} />
            <KidCards nome={'Monika'} idade={'5'} genero={'f'} img={'imgGirl'} />

          </S.DockKids>
        </ScrollView>
      </S.DockGlobal>
      <S.AddBtn>
        <Text style={{ fontSize: 25, color: '#fff' }}>+</Text>
      </S.AddBtn>
      <MenuBar TelaAtiva={'home'} />
    </S.Container>
  )
}


