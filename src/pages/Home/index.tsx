import KidCards from '@/components/KidCards';
import MenuBar from '@/components/MenuBar';
import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import { Dimensions, Text, Image, ImageBackground, View } from 'react-native';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { useTheme } from 'styled-components/native';
import * as S from './styles';
import { useNavigation } from '@react-navigation/native';
import { EyeOff, Pencil, PencilLine, Trash2 } from 'lucide-react-native';

export default function Home() {

  const navigation = useNavigation();

  const height = Dimensions.get('window').height
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
      img: 'imgBoy'
    },
    {
      id: 3,
      name: 'Ana',
      idade: '8',
      genero: 'm',
      img: 'imgGirl'
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

  let [currentData, setCurrentData] = useState({
    id: 0,
    name: '',
    idade: '',
    genero: '',
    img: ''
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
                img: item.img
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

          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <EyeOff size={14} color={theme.COLORS.TEXT_PRIMARY} />
            <S.ModalActionsText>Ocultar detalhes</S.ModalActionsText>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
              <Pencil size={14} color={theme.COLORS.TEXT_PRIMARY} />
              <S.ModalActionsText>Editar</S.ModalActionsText>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Trash2 size={14} color={theme.COLORS.TEXT_PRIMARY} />
              <S.ModalActionsText>Excluir</S.ModalActionsText>
            </TouchableOpacity>
          </View>
        </S.ModalActions>
      </Modalize>
    </GestureHandlerRootView>

  )
}


