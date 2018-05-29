export default function(state = null, action) {
	switch(action.type) {
		case 'FETCH_VALENCE':
			console.log(action.payload.audio_features)
			return action.payload;
		default:
			return state;
	}
}
