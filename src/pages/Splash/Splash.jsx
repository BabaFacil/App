import { useNavigation } from '@react-navigation/native';
import { ResizeMode, Video } from 'expo-av';
import { StyleSheet } from 'react-native';
import splash from '../../../assets/splash.mp4';
export function Splash(){
    const navigation = useNavigation();

    function onPlaybackStatusUpdate(status){
        if(status.didJustFinish){
            navigation.navigate('SignIn') 
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