import Board from "../components/Board";
import {StyleSheet, Text, View} from "react-native";
import PlayerDiv from "../components/PlayerDiv";

export default function GameScreen() {
    return (
        <>
            <Board/>
            <View style={styles.bottomContainer}>
                <PlayerDiv name={"You"} color={"orange"}/>
                <View style={styles.turnTimer}>
                    <Text style={styles.turnTimerText}>15</Text>
                </View>
                <PlayerDiv name={"Opponent"} color={"red"}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    turnTimer: {
        backgroundColor: "#fab005",
        width: 45,
        height: 45,
        borderRadius: 10,
        justifyContent: "center",
        transform: [{rotate: "45deg"}],
    },
    turnTimerText: {
        textAlign: "center",
        transform: [{rotate: "-45deg"}],
    },
})