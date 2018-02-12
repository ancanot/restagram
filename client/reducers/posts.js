function posts (state = [], action) {
    // console.log('action', action);
    // console.log('state', state);

    const i = action.index;

    switch(action.type) {
        case 'INCREMENT_LIKES' :
            return [
                ...state.slice(0, i), //before the one we are updating
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1) //after the one we are updateing
            ];
        default:
            return state;
    }            
}

export default posts;