import ChildStatus from '@/components/ChildStatus';
import KidCards from '@/components/KidCards';
import MenuBar from '@/components/MenuBar';

import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EyeOff, Pencil, Trash2 } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { Dimensions, ImageBackground, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { useTheme } from 'styled-components/native';

import * as S from './styles';
import { Separator } from '../PreChat/styles';

export default function Home() {

  const navigation = useNavigation();

  const height = Dimensions.get('window').height
  const width = Dimensions.get('window').width
  const theme = useTheme()
  const modalRef = useRef(null)

  const imagePaths = {
    'imgBoy': require('@/assets/imgs/littleboy.png'),
    'imgGirl': require('@/assets/imgs/littlegirl.png'),
  };
  const DATA = [
    {
      id: 1,
      name: 'Fernanda Alyssa Fernandes da Silva',
      idade: '8',
      genero: 'm',
      img: 'imgBoy',
      status: 'online',
      babySitter: 'Claudia',
    },
    {
      id: 3,
      name: 'Ana',
      idade: '8',
      genero: 'f',
      img: 'imgGirl',
      status: 'offline',
      babySitter: '',
    },
    {
      id: 4,
      name: 'davi',
      idade: '8',
      genero: 'm',
      img: 'imgBoy',
      status: 'online',
      babySitter: 'Nicole',
    },
    {
      id: 5,
      name: 'AAAA',
      idade: '8',
      genero: 'm',
      img: 'imgBoy',
      status: 'offline',
      babySitter: '',
    },
    {
      id: 6,
      name: 'davi',
      idade: '8',
      genero: 'm',
      img: 'imgBoy',
      status: 'online',
      babySitter: 'Song Ha Young da Silva',
    },
    {
      id: 7,
      name: 'AAAA',
      idade: '8',
      genero: 'm',
      img: 'imgBoy',
      status: 'offline',
      babySitter: '',
    },
  ]

  let [currentData, setCurrentData] = useState({
    id: 0,
    name: '',
    idade: '',
    genero: '',
    img: '',
    status: '',
    babySitter: '',
  })

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

              setCurrentData({
                id: item.id,
                name: item.name,
                idade: item.idade,
                genero: item.genero,
                img: item.img,
                status: item.status,
                babySitter: item.babySitter
              })

              modalRef.current?.open();

            }} nome={item.name} idade={item.idade} genero={item.genero} img={item.img} />

          }
        />
      </S.DockGlobal>
      <S.AddBtn onPress={() => { navigation.navigate('RegisterChild' as never) }}>
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
        handlePosition='inside'
      >
        <ImageBackground
          source={imagePaths[currentData.img]}
          style={{ height: height / 5, width: '100%' }}
          imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
          blurRadius={5}
          resizeMode='cover'
        >

          <S.ModalPhotoContainer>
            <S.ModalText style={{ width: "70%" }} numberOfLines={1} ellipsizeMode="middle">{currentData.name}</S.ModalText>
            <S.ModalText>{currentData.idade} Anos</S.ModalText>
          </S.ModalPhotoContainer>
        </ImageBackground>

        <S.ModalActions>

          <S.ModalNav>
            <EyeOff style={{ marginRight: 5 }} size={width / 20} color={theme.COLORS.TEXT_PRIMARY} />
            <S.ModalActionsText>Ocultar detalhes</S.ModalActionsText>
          </S.ModalNav>

          <View style={{ flexDirection: 'row' }}>

            <S.ModalNav style={{ marginRight: 20 }}>
              <Pencil size={width / 20} color={theme.COLORS.TEXT_PRIMARY} />
            </S.ModalNav>

            <S.ModalNav>
              <Trash2 size={width / 20} color={theme.COLORS.TEXT_PRIMARY} />
            </S.ModalNav>
          </View>
        </S.ModalActions>
        <Separator/>
        <ChildStatus status={currentData.status as 'online' | 'offline'} babySitter={currentData.babySitter} />
      
      </Modalize>
    </GestureHandlerRootView>

  )
}


