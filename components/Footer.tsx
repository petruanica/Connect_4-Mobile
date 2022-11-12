import {Image, Linking, StyleSheet, TouchableOpacity, View} from "react-native";
import CoolText from "./CoolText";

// Footer that displays the Github link of the project
export default function Footer() {
	const githubURL = 'https://github.com/petruanica/Connect_4';
	return (<View style={styles.footerView}>
		<TouchableOpacity onPress={() => Linking.openURL(githubURL)}>
			<Image source={require("../assets/github.png")} style={styles.image}/>
		</TouchableOpacity>
		<CoolText>Github</CoolText>
	</View>)
}

const styles = StyleSheet.create({
	footerView: {
		flex: 0.1,
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
	},
	image: {
		marginRight: 5,
		marginTop: 1,
		resizeMode: "contain",
		width: 15,
		height: 15
	}
});