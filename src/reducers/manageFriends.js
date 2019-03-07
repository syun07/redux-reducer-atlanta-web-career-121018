export function manageFriends(state, action) {
	switch (action.type) {
		case 'ADD_FRIEND':
			return {...state, friends: [...state.friends, action.friend]}
		case 'REMOVE_FRIEND':
			const filtered = state.friends.filter(f => f.id !== action.id)
			return {...state, friends: filtered}
		default:
			return state;
	}
}
