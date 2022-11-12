import {StyleSheet, View} from "react-native";

export default function BoardColumn() {
    return (
        <View style={styles.board_column}>
            <View style={styles.board_cell}/>
            <View style={styles.board_cell}/>
            <View style={styles.board_cell}/>
            <View style={styles.board_cell}/>
            <View style={styles.board_cell}/>
            <View style={styles.board_cell}/>
        </View>
    )
}

const styles = StyleSheet.create({
    board_column: {
        flex: 1,
        paddingTop: 5,
        flexDirection: "column",
    },
    board_cell: {
        flex: 1,
        margin: 5,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
})