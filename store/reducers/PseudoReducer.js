const initialState ={
    pseudo: ''
}

const PseudoReducer = (state={initialState} ,action) => {
   state= {...state}
   
    switch (action.type) {
        case 'HANDLE_PSEUDO':
            state.pseudo = action.value
            break;
    
        default:
            break;
    }

    return state
}
export default PseudoReducer