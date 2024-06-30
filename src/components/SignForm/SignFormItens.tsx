import Card from '@/components/Card';
import * as S from '@/pages/SignUp/styles';
import React, {useEffect, useState} from 'react';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components/native';


export default function SignFormItens({ item, onInputChange }) {
    const themeUse = useTheme();
    const { width } = useWindowDimensions()
    const [inputValues, setInputValues] = useState((Array(item.labels.length).fill('')))

    // useEffect(()=>{
    //     console.log("hahahaha");
    //     setInputValues((Array(item.labels.length).fill('')));
    // }, [])


    const handleInputChange = (text, index)=>{
        const newValues = [...inputValues];
        newValues[index] = text;
        console.log("newValues(form)",newValues);
        setInputValues(newValues);
    };


    useEffect(() =>{
        console.log("inputValues(Form): ",inputValues);
        onInputChange(inputValues);
    }, [inputValues])

    return (
        <S.Container style={[{ width}]}>
            <S.PrincipalText >{item.title}</S.PrincipalText>
            {item.labels.map((label, index) => (
                
                <Card key={index} title={label.input}>
                    <S.ButtonNav>
                        <S.Nav>
                            <S.TextInput
                                placeholderTextColor={themeUse.COLORS.TEXT_SMALL}
                                secureTextEntry={label.input === 'Senha' || label.input === 'Confirmar Senha'}
                                value={inputValues[index]}
                                onChangeText={(text) => handleInputChange(text, index)}
                            />
                        </S.Nav>
                    </S.ButtonNav>
                </Card>

            ))}
        </S.Container>

    )
}