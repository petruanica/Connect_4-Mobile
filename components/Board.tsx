import {Dimensions, StyleSheet, View} from "react-native";
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

const rows = 6
const columns = 7
const windowWidth = Dimensions.get("window").width;
const containerWidth = windowWidth * 0.95
const boardSizeUnit = Math.floor((windowWidth * 0.90) / columns);
const boardWidth = boardSizeUnit * columns;
const boardHeight = boardSizeUnit * rows;

const styles = StyleSheet.create({
    boardBig: {
        flexDirection: "column",
        width: containerWidth,
    },
    boardContainer: {
        flexDirection: "row",
    },
    board: {
        backgroundColor: "rgba(0, 136, 170, 255)",
        flexGrow: 1,
        justifyContent: "space-around",
        alignContent: "space-between",
        flexWrap: "nowrap",
        flexDirection: "row",
        width: boardWidth,
        height: boardHeight,
    },
    boardMargin: {
        width: (containerWidth - boardWidth) / 2,
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
        width: containerWidth,
        backgroundColor: "rgba(0, 102, 128, 255)",
    },
});