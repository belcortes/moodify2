export default function(state = null, action) {
	switch(action.type) {
		case 'SELECT_PLAYLIST':
			return action.payload;
		default:
			return state;
	}
}
