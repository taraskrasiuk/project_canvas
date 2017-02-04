import BoardWindow from './BoardWindow';
const Utils = {
	isBoard: (board) => {
		return board != null && board instanceof BoardWindow;
	}
}
export default Utils;
