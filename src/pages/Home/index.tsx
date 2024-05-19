import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import KidCards from '@/components/KidCards';
import MenuBar from '@/components/MenuBar';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <S.Container>
      <S.DockGlobal>
        <S.ServiceText>Serviços</S.ServiceText>
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

        <S.ChildText>Crianças</S.ChildText>

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
      <S.AddBtn onPress={() => {navigation.navigate('RegisterChild' as never)}}>
        <Text style={{ fontSize: 25, color: '#fff' }}>+</Text>
      </S.AddBtn>
      <MenuBar TelaAtiva={'home'} />
    </S.Container>
  )
}


