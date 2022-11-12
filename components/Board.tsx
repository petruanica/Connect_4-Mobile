import {StyleSheet, View} from "react-native";
import BoardColumn from "./BoardColumn";

export default function Board() {
    return (
        <View style={styles.boardBig}>
            <View style={styles.boardContainer}>
                <View style={[styles.boardMargin, styles.left]}/>
                <View style={styles.board}>
                    <BoardColumn/>
                    <BoardColumn/>
                    <BoardColumn/>
                    <BoardColumn/>
                    <BoardColumn/>
                    <BoardColumn/>
                    <BoardColumn/>
                </View>
                <View style={[styles.boardMargin, styles.right]}/>
            </View>
            <View style={styles.boardMarginBottom}/>
        </View>
    );
}

const styles = StyleSheet.create({
    boardBig: {
        flexDirection: "column",
        width: "95%",
        height: 330, // TODO
    },
    boardContainer: {
        flexDirection: "row",
        flex: 1,
    },
    board: {
        backgroundColor: "rgba(0, 136, 170, 255)",
        flexGrow: 1,
        justifyContent: "space-around",
        alignContent: "space-between",
        flexWrap: "nowrap",
        flexDirection: "row",
        width: "90%",
    },
    boardMargin: {
        flex: 1,
        backgroundColor: "rgba(0, 170, 212, 255)",
    },
    left: {
        borderTopLeftRadius: 25,
    },
    right: {
        borderTopRightRadius: 25,
    },
    boardMarginBottom: {
        height: 20,
        width: "100%",
        backgroundColor: "rgba(0, 102, 128, 255)",
    },
});