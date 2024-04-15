import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'

interface defaultProps{
    children: any;
    title: string;
}

const Card = ({ children, title }: defaultProps) => {
    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
      }
    const styles = StyleSheet.create({
        marginContainer: {
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
        },
        container: {
            borderRadius: 10,

            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,

            backgroundColor: "#FFFF"
        }
    })
    return (<>
        <View style={styles.marginContainer}>
            <Text style={{ color: "#595959", fontSize:16, fontFamily: 'OpenSans_400Regular' }}>{title}</Text>
            <View style={styles.container}>
                {children}
            </View>
        </View>
    </>
    )
}

export default Card