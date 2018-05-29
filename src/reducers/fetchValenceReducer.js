export default function(state = null, action) {
	switch(action.type) {
		case 'FETCH_VALENCE':
			let valenceArray = [];
			action.payload.forEach((features) => {
        valenceArray.push(features.valence)
      });
			let total = 0
      valenceArray.forEach((valence) => {
        total += valence
      })
			const avg = total / valenceArray.length
			const valence = Math.round(avg*100)

			return valence;
		default:
			return state;
	}
}
