import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";
import Splash from "./screens/SplashScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tutorial from "./screens/Tutorial";
import {navigationRef, NavigationScreens} from "./utils/Navigation";
import GameScreen from "./screens/GameScreen";

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
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator defaultScreenOptions={{headerShown: false}}>
                <Stack.Group screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name={NavigationScreens.Splash} component={Splash}/>
                    <Stack.Screen name={NavigationScreens.Game} component={GameScreen}/>
                </Stack.Group>
                <Stack.Group screenOptions={{presentation: 'transparentModal', headerShown: false}}>
                    <Stack.Screen name={NavigationScreens.Tutorial} component={Tutorial}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

