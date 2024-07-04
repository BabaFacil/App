import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'

interface defaultProps {
    onPress: (event: any) => void
    btnColor: string
    colorText: string
    buttonText: string
    additionalStyles?: object
    disable?: boolean
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
            <View style={styles.buttonDisable}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
        )
    }

    return (
        <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};


export default CustomButton;