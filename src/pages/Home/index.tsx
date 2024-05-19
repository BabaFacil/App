import KidCards from '@/components/KidCards';
import MenuBar from '@/components/MenuBar';
import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import * as S from './styles';

export default function Home() {

  const modalRef = useRef(null)

  const DATA = [
    {
      id: 1,
      name: 'davi',
      idade: '8',
      genero: 'm',
      img: 'imgBoy'
    },
    {
      id: 3,
      name: 'AAAA',
      idade: '8',
      genero: 'm',
      img: 'imgBoy'
    },
    {
      id: 4,
      name: 'davi',
      idade: '8',
      genero: 'm',
      img: 'imgBoy'
    },
    {
      id: 5,
      name: 'AAAA',
      idade: '8',
      genero: 'm',
      img: 'imgBoy'
    },
    {
      id: 6,
      name: 'davi',
      idade: '8',
      genero: 'm',
      img: 'imgBoy'
    },
    {
      id: 7,
      name: 'AAAA',
      idade: '8',
      genero: 'm',
      img: 'imgBoy'
    },
  ]
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_700Bold,
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
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
          <ScrollView>
            <S.DockKids
              contentContainerStyle={{ flex: 1, flexGrow: 1, paddingBottom: 320 }}
              data={DATA}
              numColumns={2}
              keyExtractor={(item: any) => item.id}
              renderItem={({ item }: any) =>
                <GestureHandlerRootView style={{ width: '50%' }} >
                  <TouchableOpacity onPress={(event) => {
                    event.persist();
                    modalRef.current?.open();
                  }}>
                    <KidCards nome={item.name} idade={item.idade} genero={item.genero} img={item.img} />
                  </TouchableOpacity>
                </GestureHandlerRootView>
              }
            />
          </ScrollView> 
          {/* <KidCards nome={'Sayori'} idade={'8'} genero={'f'} img={'imgGirl'} />
              <KidCards nome={'Yasmin'} idade={'8'} genero={'f'} img={'imgGirl'} />
              <KidCards nome={'Isabela'} idade={'8'} genero={'f'} img={'imgGirl'} />
              <KidCards nome={'Lucas'} idade={'8'} genero={'m'} img={'imgBoy'} />
              <KidCards nome={'Pedro'} idade={'8'} genero={'m'} img={'imgBoy'} />
              <KidCards nome={'Monika'} idade={'5'} genero={'f'} img={'imgGirl'} /> */}
        </S.DockGlobal>
        <S.AddBtn>
          <Text style={{ fontSize: 25, color: '#fff' }}>+</Text>
        </S.AddBtn>
        <MenuBar TelaAtiva={'home'} />
      </S.Container>
      <GestureHandlerRootView>
        <Modalize
          ref={modalRef}
          snapPoint={600}
          modalHeight={600}
        >

        </Modalize>
      </GestureHandlerRootView>
    </>
  )
}


