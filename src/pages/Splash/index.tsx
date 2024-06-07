import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { hideAsync } from 'expo-splash-screen';

type defaultProps ={
    onComplete: (status: boolean) => void
    loading: any
}

export default function Splash({onComplete, loading}: defaultProps) {
    const [lastStatus, setStatus] = useState<AVPlaybackStatus>({}as AVPlaybackStatus)
    const splash = require('@/assets/imgs/splash.mp4')
    
    async function onPlaybackStatusUpdate(status: AVPlaybackStatus) {

        if (status.isLoaded) {
            if(lastStatus.isLoaded !== status.isLoaded){
                hideAsync()
            }
            if(status.didJustFinish){
                loading ? onComplete(false) : onComplete(true)
            }
        }
    }
    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={splash}
            isLooping={true}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />
    )
}