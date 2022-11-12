import {Image, StyleSheet, View} from "react-native";
import CoolButton from "./CoolButton";
import Footer from "./Footer";
import {StatusBar} from "expo-status-bar";


export default function Splash() {
	return (
		<View style={styles.container}>
			<View style={styles.logoWrapper}>
				<View style={{flex: 1, top: '20%'}}>
					<Image source={require("../assets/logoconnect4.png")}
					       style={styles.connect4Image}/>
				</View>
			</View>
			<View style={{flex: 1, width: '100%'}}>
				<CoolButton text="Play"/>
				<CoolButton text="Tutorial"/>
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
	connect4Image: {
		flex: 1,
		height: undefined,
		width: undefined,
		resizeMode: "contain"
	},
	logoWrapper: {
		flex: 0.4, padding: 20, width: '100%'
	}
	
});