import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import { Text } from 'react-native';
import * as S from './styles';

interface defaultProps{
    children: any;
    title?: string;
}

const Card = ({ children, title }: defaultProps) => {
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }

    return (<>
        <S.MarginContainer>
            <S.LabelCard >{title}</S.LabelCard>
            <S.Container>
                {children}
            </S.Container>
        </S.MarginContainer>
    </>
    )
}

export default Card