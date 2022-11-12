import Board from "../components/Board";
import {StyleSheet, Text, View} from "react-native";
import PlayerDiv from "../components/PlayerDiv";
import Logo from "../components/Logo";

export default function GameScreen() {
    return (
        <View style={styles.container}>
            <Logo flex={1} top={0}/>
            <Board/>
            <View style={styles.bottomContainer}>
                <View style={[styles.bottomContainer, {marginTop: "20%"}]}>
                    <PlayerDiv name={"You"} color={"orange"}/>
                    <View style={styles.turnTimer}>
                        <Text style={styles.turnTimerText}>15</Text>
                    </View>
                    <PlayerDiv name={"Opponent"} color={"red"}/>
                </View>

            </View>
            {/*<Footer/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
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