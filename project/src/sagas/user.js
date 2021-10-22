import { call,all, fork, takeLatest,delay, put} from "redux-saga/effects";
import {GET_REQUEST,GET_SUCCESS, GET_FAILURE,GET_LOGINREQUEST,GET_LOGINSUCCESS, GET_LOGINFAILURE} from '../reducers/user';
import Perference from '../Perference';

  const query = (params) => {
    return Object.keys(params) .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])) .join('&');
  }

  function postData(url = '', data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native JavaScript objects
  }

function DetailAPI(userEmail,TodayConvert,periodType){
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert,"periodType":periodType };
    let url = 'http://118.131.6.218:8000/detail?'+query(params);
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
// function LoginAPI(userEmail,TodayConvert){
//       postData('http://118.131.6.218:8000/login', {id: userEmail , passwd:userPassword})
//     .then(res => {
//             Perference.setUser(userEmail);
//         })
// }
function DashboardAPI(userEmail,TodayConvert){
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert };
    let url = 'http://118.131.6.218:8000/dashboard?'+query(params);
     console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log('dashboardin');
        Perference.setDashboard(res.realGraph.Y.concat(res.predictedGraph.Y))
       Perference.setDashboardTotal(res.todayTotalRevenue)
       Perference.setDashboardToday(res.todayRevenue)
       Perference.setDashboardTodayPredicted(res.todayPredictedRevenue)
       Perference.setDashboardCountReal(res.realGraph.Y)
      })
}
function ReportAPI(userEmail,TodayConvert){
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert };
    let url = 'http://118.131.6.218:8000/report?'+query(params);
     console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log('reportin');
        Perference.setReportMonthPredicted(res.predictedRevenueThisMonth)
        Perference.setReportMonthAverage(res.compareMonthAverage)
        Perference.setReportLastYearOfMonth(res.compareLastYearOfMonth)
        Perference.setReportData(res.accumulatedRevenueGraph.Real_Y.concat(res.accumulatedRevenueGraph.pred_Y))
        Perference.setReportDataTable(res.cumulativeRevenueList)
        Perference.setReportIndexUserInvestment(res.userInvestment)
        Perference.setReportTotalRevenue(res.totalRevenue)
        Perference.setReportActualRevenue(res.actualRevenue)
        Perference.setMoney(res.userInvestment)
      })
}
function* GetData(action) {
    try {
        console.log('saga / data'+JSON.stringify(action.data));
        yield call(DetailAPI,action.data.userEmail,action.data.TodayConvert,action.data.periodType);
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

function* GetLoginData(action) {
    try {
        console.log('saga / data'+JSON.stringify(action.data));
        yield call(DashboardAPI,action.data.userEmail,action.data.TodayConvert);
        yield call(ReportAPI,action.data.userEmail,action.data.TodayConvert);
        yield put({
            type: GET_LOGINSUCCESS,
        });
    } catch (error) {
        yield put({
            type: GET_LOGINFAILURE,
            error: error.response.data
        });
    }
}

// 이벤트 리스너 같은 역할을 한다.
function* watchLogin() {
    console.log('saga / watchdata');
    yield takeLatest(GET_REQUEST, GetData);
    yield takeLatest(GET_LOGINREQUEST, GetLoginData);

}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
    ])
}