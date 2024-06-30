import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface defaultProps {
    onPress: (event: any) => void
    btnColor: string
    colorText: string
    buttonText: string
    additionalStyles?: object
    disable: boolean
}

const CustomButton = ({ onPress, btnColor, colorText, buttonText, additionalStyles, disable }: defaultProps) => {

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: btnColor,
        padding: 15,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        ...additionalStyles
    },

    buttonDisable:{
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: "#ffc0cb",
        padding: 15,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        ...additionalStyles
    },

    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colorText
      }

})

    if(disable){
        return (
            <TouchableOpacity style={styles.buttonDisable}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};


export default CustomButton;