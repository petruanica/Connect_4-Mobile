import {StyleSheet, Text, View} from "react-native";

export type PlayerDivProps = {
    name: string,
    color: string
}

export default function PlayerDiv(props: PlayerDivProps) {
    return (
        <View style={styles.container}>
            <View style={[styles.playerDiv, {borderColor: props.color}]}>
                <View style={styles.playerWinIcon}/>
                <View style={styles.playerInfo}>
                    <Text style={styles.playerInfoSpan}/>
                </View>
                <View style={styles.playerTurn}/>
                <Text style={styles.playerType}>{props.name}</Text>
            </View>
            <View style={styles.playerScore}>
                <Text>0</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    playerDiv: {
        borderWidth: 3,
        // borderColor: "red",
        borderStyle: "solid",
        borderRadius: 25,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 35,
        backgroundColor: "white",
    },
    playerWinIcon: {
        display: "none",
        width: 30,
        height: 30,
    },
    playerInfo: {
        display: "none",
        width: "100%",
        height: "90%",
        backgroundColor: "rgb(0, 118, 139)",
    },
    playerInfoSpan: {
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 15,
    },
    playerTurn: {
        display: "none",
        width: 15,
        height: 15,
        borderRadius: 7.5,
    },
    playerType: {
        marginHorizontal: 3,
        paddingTop: 3,
        minWidth: 80,
        textAlign: "center",
    },
    playerScore: {
        borderRadius: 15,
        width: 30,
        height: 30,
        backgroundColor: "rgba(0, 170, 212, 255)",
        justifyContent: "center",
        alignItems: "center",
    },
})