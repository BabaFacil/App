import { useNavigation } from '@react-navigation/native';
import { ResizeMode, Video } from 'expo-av';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash() {
    const navigation = useNavigation();

    const splash = require('@/assets/imgs/splash.mp4')
    
    async function onPlaybackStatusUpdate(status) {

        if (status.didJustFinish) {
            const response = await AsyncStorage.getItem("@viewedonboarding")
            if(response){
                navigation.navigate('SignIn' as never)
            }else{
                navigation.navigate('Welcome' as never)
            }

        }
    }
    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={splash}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />
    )
}