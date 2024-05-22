import { OpenSans_400Regular, OpenSans_500Medium, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';

import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Animated, Text } from 'react-native';

import * as S from './styles';

interface baseProps {
    status: string;
}

interface onlineProps extends baseProps {
    status: "online";
    babySitter: string;
}

interface offlineProps extends baseProps {
    status: 'offline';
    babySitter?: string;
}

type props = onlineProps | offlineProps;


export default function ChildStatus({ status, babySitter }: props) {
    const navigation = useNavigation();
    const opacityValue = useState(new Animated.Value(0.2))[0];

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_500Medium,
        OpenSans_700Bold,
    });

    if (status === "online" && !babySitter) {
        throw new Error("The 'babySitter' name is required when status is 'online'!");
    };

    const colors = {
        "online": "#00FF00",
        "offline": '#FF0000'
    };

    const defaultText = {
        "online": <S.StatusText>Está sendo cuidado pela babá: <S.StatusTextBold onPress={() => { navigation.navigate('Chat' as never) }}>{babySitter}</S.StatusTextBold></S.StatusText>,
        "offline": <S.StatusText>Não está sendo cuidado por uma babá</S.StatusText>,
    }

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(opacityValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityValue, {
                    toValue: 0.2,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();

    }, [opacityValue]);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    
    return (
        <S.Container>
            <Animated.View style={{ opacity: babySitter ? opacityValue : 1 }}>
                <S.Status style={{ backgroundColor: colors[status] }} />
            </Animated.View>
            {defaultText[status]}
        </S.Container>

    )
}