import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";
import Splash from "./components/SplashScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
export default function App() {
    const [fontsLoaded] = useFonts({
        'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    // force checking if it is not already loaded
    onLayoutRootView();
    if (!fontsLoaded)
        return null;
    
    return (
        <NavigationContainer>
            <Stack.Navigator defaultScreenOptions={{headerShown: false}}>
                <Stack.Screen name="splash" component={Splash} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

