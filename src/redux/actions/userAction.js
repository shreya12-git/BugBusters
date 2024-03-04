import axios from 'axios';
import {toast} from "react-toastify";
import{
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    // USER_LOGIN_RESET,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    // USER_LOGOUT_RESET,
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    // USER_SIGNUP_RESET,
    USER_LOAD_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    
} from '../constants/userConstant';

export const userSignInAction=(user)=>async(dispatch)=>{
    dispatch({
        type:USER_SIGNIN_REQUEST
    });
    try{
        const {data}=await axios.post("http://localhost:3000/",user);
        if(data.success){
            localStorage.setItem('userInfo',JSON.stringify(data));
            dispatch({
                type:USER_SIGNIN_SUCCESS,
                payload:data
            });
            toast.success("Login Successfull!!");
        }
        else{
            toast.error("Invalid Credentials!!");
        }
    }
    catch(error){
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload:error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}
export const userSignUpAction=(user)=>async(dispatch)=>{
    dispatch({
        type:USER_SIGNUP_REQUEST
    });
    try{
        const {data}=await axios.post("http://localhost:3000/signup",user);
        dispatch({
            type:USER_SIGNUP_SUCCESS,
            payload:data
        });
        toast.success("Register Successfully!!");
    }
    catch(error){
        dispatch({
            type:USER_SIGNUP_FAIL,
            payload:error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}
export const userLogOutAction=()=>async(dispatch)=>{
    dispatch({
        type:USER_LOGOUT_REQUEST
    });
    try {
        localStorage.removeItem('userInfo');
        const {data}=await axios.get("http://localhost:3000/logout");
        dispatch({
            type:USER_LOGOUT_SUCCESS,
            payload:data
        });
        toast.success("Logged Out Successfully!");
    } catch (error) {
        dispatch({
            type:USER_LOGOUT_FAIL,
            payload:error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

export const userProfileAction = () => async (dispatch) => {
    dispatch({ type: USER_LOAD_REQUEST });
    try {
        const { data } = await axios.get("http://localhost:3000/profile");
        console.log("/me");
        dispatch({
            type: USER_LOAD_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: USER_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}