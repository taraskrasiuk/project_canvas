import BoardView from '../board/BoardView';
const Utils = {
	isBoard: (board) => {
		return board != null && board instanceof BoardView;
	}
}
export default Utils;
