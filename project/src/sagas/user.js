import { call,all, fork, takeLatest,delay, put} from "redux-saga/effects";
import {GET_REQUEST,GET_SUCCESS, GET_FAILURE} from '../reducers/user';
import Perference from '../Perference';

  const query = (params) => {
    return Object.keys(params) .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])) .join('&');
  }
function DetailAPI(userEmail,TodayConvert,periodType){
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert,"periodType":periodType };
    let url = 'http://118.131.6.218:8000/detail?'+query(params);
   // let url = 'http://118.131.6.218:8000/detail?'+'plantId_subId='+userEmail+'+&timestamp='+TodayConvert+'&periodType='+periodType+'';
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log('detailin');
       Perference.setData(res.realPowerGraph.Y.concat(res.predictedPowerGraph.Y))
       Perference.setDataTable(res.revenueFromPowerList)
       Perference.setDataCountReal(res.realPowerGraph.Y)
      })
}
function* GetData(action) {
    try {
        console.log('saga / logIn'+JSON.stringify(action.data));
      //  yield call(DashboardAPI,JSON.stringify(action.data.userEmail),JSON.stringify(action.data.TodayConvert));
        yield call(DetailAPI,action.data.userEmail,action.data.TodayConvert,action.data.periodType);
      //  yield call(ReportAPI,JSON.stringify(action.data.userEmail),JSON.stringify(action.data.TodayConvert));
        yield put({
            type: GET_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: GET_FAILURE,
            error: error.response.data
        });
    }
}

// 이벤트 리스너 같은 역할을 한다.
function* watchLogin() {
    console.log('saga / watchLogin');
    yield takeLatest(GET_REQUEST, GetData);

}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
    ])
}