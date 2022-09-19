
const initState = {
    users: [
        

    ],
    ports: []
}
const rootReducer = (state=initState, action) => {
    
    switch (action.type) {
        case 'DELETE_USER':
            console.log('CREATE_USER', action);

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state,users
            };
            case 'CREATE_USER':
                console.log('CREATE_USER', action);
                let user = {id:action.payload.id ,name: action.payload.name}
                return {
                    ...state,users:[...state.users,user]
                };  
        
        default:
            return state;

    }
    
}
export default rootReducer;