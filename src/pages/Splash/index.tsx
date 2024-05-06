import { useNavigation } from '@react-navigation/native';
import { ResizeMode, Video } from 'expo-av';
import { StyleSheet } from 'react-native';
import splash from '../../../assets/splash.mp4';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Splash() {
    const navigation = useNavigation();

    async function onPlaybackStatusUpdate(status) {

        if (status.didJustFinish) {
            const response = await AsyncStorage.getItem("@viewedonboarding")
            if(response){
                navigation.navigate('SignIn')
            }else{
                navigation.navigate('Welcome')
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