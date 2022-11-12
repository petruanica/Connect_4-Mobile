import {StyleSheet, View} from "react-native";

export default function BoardColumn() {
    return (
        <View style={styles.boardColumn}>
            <View style={styles.boardCell}/>
            <View style={styles.boardCell}/>
            <View style={styles.boardCell}/>
            <View style={styles.boardCell}/>
            <View style={styles.boardCell}/>
            <View style={styles.boardCell}/>
        </View>
    )
}

const styles = StyleSheet.create({
    boardColumn: {
        flex: 1,
        paddingTop: 5,
        flexDirection: "column",
    },
    boardCell: {
        flex: 1,
        margin: 5,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
})