import {expect, test} from '@jest/globals';
import {Board, PlayerColor} from "./Board";

function sum(a: number, b: number) {
	return a + b;
}

test('board has empty places in the beginning', () => {
	const board = new Board();
	for (let i = 0; i < board.columns; i++) {
		for (let j = 0; j < board.rows; j++) {
			expect(board.boardPieces[i][j]).toBe(0);
		}
	}
});

test("win game with 4 in a row vertically", () => {
	
	const board = new Board();
	board.placePiece(0, PlayerColor.Player1);
	board.placePiece(0, PlayerColor.Player1);
	board.placePiece(0, PlayerColor.Player1);
	board.placePiece(0, PlayerColor.Player1);
	const [win, pos] = board.checkWin();
	expect(win).toBe(true);
	expect(pos).toEqual(([
		{"col": 0, "row": 3},
		{"col": 0, "row": 2},
		{"col": 0, "row": 1},
		{"col": 0, "row": 0},
	]))
})
test("win game with 2 players win diag", () => {
	
	const board = new Board();
	for (let i = 1; i <= 3; i++) {
		board.placePiece(i, PlayerColor.Player1);
		board.placePiece(i, PlayerColor.Player2);
	}
	board.placePiece(4, PlayerColor.Player1);
	// Player 1 should win
	const [win, pos] = board.checkWin();
	expect(win).toBe(true);
	expect(pos).toEqual(([
		{"col": 4, "row": 0},
		{"col": 3, "row": 0},
		{"col": 2, "row": 0},
		{"col": 1, "row": 0},
	]))
})
