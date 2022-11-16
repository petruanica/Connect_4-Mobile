import {Text, TextProps} from "react-native";

// Custom Text Wrapper that sets the default font to `Nunito`
export default function CoolText(props: TextProps) {
	
	return (<Text {...props} style={[props.style, {fontFamily: "Virgil"}]}>{props.children}</Text>)
}