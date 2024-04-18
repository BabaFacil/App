import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider as ThemeProviderStyled } from 'styled-components/native';
import dark from "./dark";
import light from "./light";

export enum ThemeType {
    light = 'light',
    dark = 'dark',
}
const themes = {
    light: light,
    dark: dark
}
interface Props {
    children: React.ReactNode;
}
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => { },
})

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(ThemeType.light)

    useEffect(()=>{
        loadTheme()
    }, [])

    async function loadTheme(){
        const savedTheme = await AsyncStorage.getItem("@theme")

        if(savedTheme){
            setTheme(savedTheme)
        }
    }

    function toggleTheme() {
        let selectTheme;
        
        if (theme === ThemeType.light) {
            selectTheme = ThemeType.dark
        } else {
            selectTheme = ThemeType.light
        }

        setTheme(selectTheme)
        AsyncStorage.setItem("@theme", selectTheme)
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }} >
            <ThemeProviderStyled theme={themes[theme]}>
                {children}
            </ThemeProviderStyled>
        </ThemeContext.Provider>
    )
}