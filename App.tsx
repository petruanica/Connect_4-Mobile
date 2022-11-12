import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";
import Splash from "./components/SplashScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tutorial from "./components/Tutorial";
import {navigationRef, NavigationScreens} from "./utils/navigation";

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
				<Stack.Screen name={NavigationScreens.Splash} component={Splash} options={{
					headerShown: false
				}}/>
				<Stack.Group screenOptions={{presentation: 'transparentModal', headerShown: false}}>
					<Stack.Screen name={NavigationScreens.Tutorial} component={Tutorial}/>
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

