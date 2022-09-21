
const initState = {
    users: [
],
    carts: []
}
const rootReducer = (state=initState, action) => {
    
    switch (action.type) {
        case 'DELETE_USER':

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state,users
            };
        case 'CREATE_USER':
                let user = {id:action.payload.id ,name: action.payload.name}
                return {
                    ...state,users:[...state.users,user]
                };  
        case 'ADD_CART':
                let cart = {ma_ctsp: action.payload.ma_ctsp, ten_sp: action.payload.ten_sp, ten_kt:action.payload.ten_kt ,hinh_anh: action.payload.hinh_anh,so_luong: action.payload.so_luong,gia_ban: action.payload.gia_ban}
                
                return {
                    ...state,carts:[...state.carts,cart]
                }; 
        case 'DELETE_CART':

            let carts = state.carts;
            carts = carts.filter(item => item.ma_ctsp !== action.payload.ma_ctsp)
            return {
                ...state,carts
            }; 
        
        default:
            return state;

    }
    
}
export default rootReducer;