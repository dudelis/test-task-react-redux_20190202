const INITIAL_STATE = {
    data: [],
    index: null
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'GET_DATA':
            return {...state, data: action.payload}
        case 'SELECT_ITEM':
            return {...state, index: action.payload.index}
        default:
            return state;
    }
}