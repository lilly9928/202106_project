export const initialState = {
    logInLoading : false,  // 로그인 시도중
    logInDone : false, 
    logInError : null,
    TodayConvert:null
};

export const GET_REQUEST = 'GET_REQUEST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const GET_LOGINREQUEST = 'GET_LOGINREQUEST';
export const GET_LOGINSUCCESS = 'GET_LOGINSUCCESS';
export const GET_LOGINFAILURE = 'GET_LOGINFAILURE';

export const dataRequestAction = (data) =>{
    console.log('reducer / dataRequestAction ');
    return {
        type: GET_REQUEST,
        data:data
        
    }
};

export const LoginRequestAction = (data) =>{
    console.log('reducer / LoginRequestAction ');
    return {
        type: GET_LOGINREQUEST,
        data:data
        
    }
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_REQUEST:{
            console.log('reducer / data req 요청');
            return {
                ...state,
                logInLoading : true,
                logInDone : false,
                logInError : null,
            };
        }
        case GET_SUCCESS:{
            console.log('reducer / data req 완료');
            return {
                ...state,
                logInLoading : false,
                logInDone : true,
                TodayConvert:action.data
            };
        }
        case GET_FAILURE:{
            console.log('reducer / data req 실패');
            return {
                logInLoading : false,
                logInError : action.error,
            };
        }

        case GET_LOGINREQUEST:{
            console.log('reducer / 로그인요청');
            return {
                ...state,
                logInLoading : true,
                logInDone : false,
                logInError : null,
            };
        }
        case GET_LOGINSUCCESS:{
            console.log('reducer / 로그인 완료 ');
            return {
                ...state,
                logInLoading : false,
                logInDone : true,
                TodayConvert:action.data
            };
        }
        case GET_LOGINFAILURE:{
            console.log('reducer / 로그인 실패');
            return {
                logInLoading : false,
                logInError : action.error,
            };
        }
        default: {
            return{
                ...state,
            }
        }    
    }
};

export default reducer;