import {StyleSheet, TouchableOpacity} from "react-native";
import CoolText from "./CoolText";

export default function CoolButton(props: { text: string }) {
    return (
        <TouchableOpacity style={styles.buttons}>
            <CoolText style={styles.text}>{props.text}</CoolText>
        </TouchableOpacity>)
}
const styles = StyleSheet.create({
    buttons: {
        borderStyle: "dotted",
        borderWidth: 1,
        margin: 20,
        padding: 20,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: "Nunito"
    }
})
