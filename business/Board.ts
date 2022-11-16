import assert from "assert";

export enum PlayerColor {
	Player1 = "Player1",
	Player2 = "Player2"
}

export type PiecePosition = {
	col: number,
	row: number
}
type BoardPiece = PlayerColor | 0

export class Board {
	private _rows: number = 6; // number of rows the board has
	private _columns: number = 7; // number of columns the board has
	
	// boardPices[j][i] = The column j from left to right and the row i from top to bottom( bottom = 0, top = rows - 1)
	private _boardPieces: BoardPiece[][] = Array.from(Array(this._columns), () => new Array(this._rows));
	
	
	// lastCellColumn[col] = last row where a piece has been put by a player
	// lastCellColumn[col] + 1 should indicate the next free row position to put on that column
	// lastCellColumn[col] = -1 means that nothing is on that column
	// lastCellColumn[col] = rows-1 means that the column is full
	private lastCellColumn = Array(this._columns);
	
	private _lastPiecePosition: PiecePosition = {"col": -1, "row": -1}
	
	get boardPieces() {
		return this._boardPieces;
	}
	
	get rows() {
		return this._rows;
	}
	
	get columns() {
		return this._columns;
	}
	
	/**
	 * creates the board using the 'board-column' and 'board-cell' class names
	 */
	clearBoard() {
		for (let i = 0; i < this._columns; i++) {
			this._boardPieces[i] = new Array(this._rows).fill(0);
		}
		this._lastPiecePosition = {"col": -1, "row": -1}
		this.lastCellColumn.fill(-1);
	}
	
	constructor() {
		this.clearBoard();
	}
	
	
	/**
	 * Places a new piece on a column if it is able to do so
	 * @param {number} col
	 * @param {PlayerColor} playerTurn
	 * @return {number} the row where the piece was placed or undefined if it can't be placed anymore
	 */
	placePiece(col: number, playerTurn: PlayerColor) {
		const rowIndex = this.lastCellColumn[col] + 1;
		if (rowIndex < this._rows) {
			this._lastPiecePosition = {"col": col, "row": rowIndex}
			this._boardPieces[col][rowIndex] = playerTurn;
			this.lastCellColumn[col]++;
			return rowIndex;
		}
		return undefined;
	}
	
	
	/**
	 * Checks if the piece and the given row and column has the same color as the current player's turn color
	 * This function is used to check if one of the player has won the game
	 * @param {number} column
	 * @param {number} row
	 * @param {string} color
	 * @return {boolean} if the piece at the that position has the background color of the player's turn color
	 */
	sameColor(column: number, row: number, color: PlayerColor) {
		return (this._boardPieces[column][row] == color);
	}
	
	/**
	 * Checks if the given column and row are in the board bounderies
	 * This function is also used to if a player is winning
	 * it is called by {@link okColor()}
	 * @param {number} column
	 * @param {number} row
	 * @return {boolean} true/false if the given position is on the board
	 */
	isOnBoard(column: number, row: number) {
		return (column >= 0 && column < this._columns && row >= 0 && row < this._rows);
	}
	
	/**
	 * Checks if the given position is on the board and the color of the position is the same
	 * @param {number} column
	 * @param {number} row
	 * @param {string} color
	 * @return {boolean}
	 */
	okColor(column: number, row: number, color: PlayerColor) {
		return (this.isOnBoard(column, row) && this.sameColor(column, row, color));
	}
	
	
	/**
	 *
	 * @param {number} column column where the last piece was placed
	 * @param {number} row row where the last piece was placed
	 * @param {string} color the color of the last move
	 * @param {number} dcol how does the column change when we go a direction(column/row/diagonal)
	 * @param {number} drow how does the column change when we go a direction(column/row/diagonal)
	 * @return {Array} [true/false,positions of the winning move] weather the move is a winning one
	 */
	checkWinLines(column: number, row: number, color: PlayerColor, dcol: number, drow: number) {
		let left = 0;
		let right = 3;
		for (let position = 1; position <= 4; position++) {
			let col = column;
			let r = row;
			let win = true;
			const positions: PiecePosition[] = [{col: col, row: row}];
			for (let x = 1; x <= left; x++) {
				col -= dcol;
				r += drow;
				if (!this.okColor(col, r, color)) {
					win = false;
				}
				positions.push({
					col: col,
					row: r
				});
			}
			
			col = column;
			r = row;
			for (let x = 1; x <= right; x++) {
				col += dcol;
				r -= drow;
				if (!this.okColor(col, r, color)) {
					win = false;
				}
				positions.push({
					col: col,
					row: r
				});
			}
			if (win) {
				return [true, positions];
			}
			left++;
			right--;
		}
		return [false, []];
	}
	
	/**
	 * Checks weather the last move at the position column,row is a winning one using {@link checkWinLines}
	 * @return {boolean} true/false if the last move was a winning one
	 */
	checkWin() {
		const directions = [
			[1, 0],
			[0, 1],
			[-1, -1],
			[1, -1]
		];
		const {col, row} = this._lastPiecePosition;
		const color = this._boardPieces[col][row];
		assert(color != 0)
		
		for (const direction of directions) {
			const [dx, dy] = direction;
			const [outcome, positions] = this.checkWinLines(col, row, color, dx, dy);
			if (outcome) {
				return [outcome, positions];
			}
		}
		return [false, []];
	}
	
	checkBoardFull() {
		for (const lastCell of this.lastCellColumn) {
			if (lastCell < this._rows - 1) {
				return false;
			}
		}
		return true;
	}
}