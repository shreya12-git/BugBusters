import{
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_RESET,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_RESET,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_RESET,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_RESET 

} from '../constants/userConstant';

//Login reducer
export const userReducerLogIn=(state={},action)=>{
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{
                loading:true,
                userInfo:null,
                isAuthenticated:false
            }
        case USER_LOGIN_SUCCESS:
            return{
                loading:false,
                userInfo:action.payload,
                isAuthenticated:true
            }
        case USER_LOGIN_FAIL:
            return{
                loading:false,
                userInfo:null,
                isAuthenticated:false,
                error:action.payload
            }
        case USER_LOGIN_RESET:
            return{}
        default:
            return state;
    }
}

//SIGNUP REDUCER:
export const userReducerSignUp=(state={},action)=>{
    switch(action.type){
        case USER_SIGNUP_REQUEST:
            return {loading:true}
        case USER_SIGNUP_SUCCESS:
            return{
                loading:false,
                userSignUp:action.payload,
            }
        case USER_SIGNUP_FAIL:
            return {
                loading:false,
                error:action.payload,
            }
        case USER_SIGNUP_RESET:
            return {}
        default:
            return state;
    }
}

//LogOut Reducer
export const userReducerLogOut=(state={},action)=>{
    switch(action.type){
        case USER_LOGOUT_REQUEST:
            return{loading:true}
        case USER_LOGOUT_SUCCESS:
            return{
            loading:false,
            user:action.payload,
            }
        case USER_LOGOUT_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case USER_LOGOUT_RESET:
            return {}
        default:
            return state;
    }
}
export const userReducerProfile = (state = { user: null }, action) => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true, user: null }
        case USER_LOAD_SUCCESS:
            return {
                loading: false,
                user: action.payload.user,
            }
        case USER_LOAD_FAIL:
            return { loading: false, user: null, error: action.payload }
        case USER_LOAD_RESET:
            return {}
        default:
            return state;
    }

}




//all chats