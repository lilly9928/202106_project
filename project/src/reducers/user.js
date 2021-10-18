export const initialState = {
    logInLoading : false,  // 로그인 시도중
    logInDone : false, 
    logInError : null,
    TodayConvert:null
};

export const GET_REQUEST = 'GET_REQUEST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const dataRequestAction = (data) =>{
    console.log('reducer / dataRequestAction ');
    return {
        type: GET_REQUEST,
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
        default: {
            return{
                ...state,
            }
        }    
    }
};

export default reducer;