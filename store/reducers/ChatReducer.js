const initialState = {
    messages : '',
    message: ''
}

const ChatReducer = (state=initialState,action)=>{
    state={...state}
    switch (action.type) {
        case 'CHANGE_MESSAGE':
            state.message= action.value
            break;
        case 'ADD_MESSAGE':
            state.message = "";
            // state.messages.push(action.value);
            break;
        case 'LOAD_MESSAGES':
            state.messages = action.value
            
            break;
        default:
            break;
    }
    return state
}

export default ChatReducer