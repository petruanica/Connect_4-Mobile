import {FlexStyle, StyleSheet, TouchableOpacity, TouchableOpacityProps, ViewProps} from "react-native";
import CoolText from "./CoolText";

export type CoolButton = {
	text: string, // text to display in the button
	onPress?: () => any; // function called when pressing
	style?: TouchableOpacityProps | ViewProps | FlexStyle,
}
export default function CoolButton(props: CoolButton) {
	return (
		<TouchableOpacity style={[styles.buttons, props.style]} onPress={props.onPress}>
			<CoolText style={styles.text}>{props.text}</CoolText>
		</TouchableOpacity>)
}

const styles = StyleSheet.create({
	buttons: {
		borderStyle: "dotted",
		borderWidth: 1,
		padding: 20,
	},
	text: {
		fontSize: 30,
		textAlign: 'center',
		fontFamily: "Nunito"
	}
})
