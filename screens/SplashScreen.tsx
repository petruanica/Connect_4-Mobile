import {StyleSheet, View} from "react-native";
import CoolButton from "../components/CoolButton";
import Footer from "../components/Footer";
import {StatusBar} from "expo-status-bar";
import Logo from "../components/Logo";
import {navigate, NavigationScreens} from "../utils/Navigation";


export default function Splash() {
    return (
        <View style={styles.container}>
            <Logo flex={0.4} top={"10%"}/>
            <View style={{flex: 1, width: '100%'}}>
                <View style={styles.buttonStyle}>
                    <CoolButton text="Play" onPress={() => navigate((NavigationScreens.Game))}/>
                </View>
                <View style={styles.buttonStyle}>
                    <CoolButton text="Tutorial" onPress={() => navigate(NavigationScreens.Tutorial)}/>
                </View>
                <StatusBar style="auto"/>
            </View>
            <Footer/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        marginHorizontal: 40,
        marginVertical: 20,
    },
});