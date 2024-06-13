import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, FileImage} from 'lucide-react-native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import * as S from './styles'
import BtnC from '@/components/CustomButton';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RegisterChild() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState("") 
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowPicker(false)
        setDate(currentDate)
    };
    
    const showDatepicker = () => {
        setShowPicker(true)
    }

    let theme = useTheme()

    return(
        <>
           <S.Container>
                <S.Return onPress={() => { navigation.navigate('Home' as never) }}>
                    <ArrowLeft strokeWidth={1} color={theme.COLORS.TEXT_PRIMARY} size={28} />
                    <S.ReturnText>Voltar</S.ReturnText>
                </S.Return>
                <S.FormContainer>
                    <View style={{ gap: 10 }}>
                        <S.FileInput>
                            <FileImage strokeWidth={1} color={theme.COLORS.TEXT_PRIMARY} size={40}/>
                        </S.FileInput>
                        <S.TextInput placeholder='Nome' placeholderTextColor={theme.COLORS.TEXT_PRIMARY}/>
                        <S.TextInput 
                            placeholder='DD/MM/AAAA' 
                            placeholderTextColor={theme.COLORS.TEXT_PRIMARY} 
                            inputMode='none' 
                            cursorColor='transparent' 
                            onPressIn={showDatepicker} 
                            value={date.toLocaleDateString()}
                        />
                        { showPicker && 
                            <DateTimePicker 
                                value={date} 
                                display='spinner' 
                                maximumDate={ new Date() } 
                                minimumDate={ new Date(2014, 0, 1) } 
                                onChange={onChange}
                            /> 
                        }
                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', height: 60 }}>
                            <BtnC
                                buttonText='Menino'
                                btnColor='#639CB5'
                                colorText={ selected  == 'menino' ? '#639CB5' : '#fff' }
                                additionalStyles={ 
                                    selected == 'menino' 
                                    ? { margin: 0, width: 150, borderRadius: 27, borderColor: '#639CB5', borderWidth: 3, backgroundColor: 'transparent'} 
                                    : { margin: 0, width: 150, borderRadius: 27, height: 55 }
                                }
                                onPress={() => { setSelected('menino') }}
                            />
                            <BtnC
                                buttonText='Menina'
                                btnColor='#E96181'
                                colorText={ selected == 'menina' ? '#E96181' : '#fff' }
                                additionalStyles={ 
                                    selected == 'menina' 
                                    ? { margin: 0, width: 150, borderRadius: 27, borderColor: '#E96181', borderWidth: 3, backgroundColor: 'transparent'} 
                                    : { margin: 0, width: 150, borderRadius: 27, height: 55 }
                                } 
                                onPress={() => { setSelected('menina') }}
                            />
                        </View>
                        <S.TextInput 
                            style={{ verticalAlign: 'top' }} 
                            placeholder='Descrição' 
                            multiline={true} 
                            numberOfLines={8} 
                            maxLength={390}
                            placeholderTextColor={theme.COLORS.TEXT_PRIMARY}
                        />
                    </View> 
                    <View>
                        <BtnC
                            buttonText='Cadastrar'
                            btnColor='#E96181'
                            colorText='#fff'
                            additionalStyles={{ margin: 0, borderRadius: 27 }}
                            onPress={() => {}}
                        /> 
                    </View>
                </S.FormContainer>
           </S.Container>
        </>
    )
}