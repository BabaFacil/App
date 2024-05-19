import KidCards from '@/components/KidCards';
import MenuBar from '@/components/MenuBar';
import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Dimensions, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { useTheme } from 'styled-components/native';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const height = Dimensions.get('window').height
  const theme = useTheme()
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
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}>
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
          <S.DockKids
            style={{ flex: 1, flexGrow: 1 }}
            contentContainerStyle={{ paddingBottom: 200 }}
            data={DATA}
            numColumns={2}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }: any) =>
              <KidCards onPress={(event) => {
                event.persist();
                modalRef.current?.open();
              }} nome={item.name} idade={item.idade} genero={item.genero} img={item.img} />

            }
          />
        </S.DockGlobal>
        <S.AddBtn>
          <Text style={{ fontSize: 25, color: '#fff' }}>+</Text>
        </S.AddBtn>
        <MenuBar TelaAtiva={'home'} />
        <Modalize
          ref={modalRef}
          snapPoint={height / 2}
          modalHeight={height - 30}
          handleStyle={{
            backgroundColor: "#D9D9D9",
            height: 6,
            width: '20%'
          }}
          childrenStyle={{paddingTop: 25, paddingHorizontal: 10}}
          handlePosition='inside'
        >
        </Modalize>
      </GestureHandlerRootView>

  )
}


