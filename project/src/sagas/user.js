import { call, all, fork, takeLatest, delay, put } from "redux-saga/effects";
import { GET_REQUEST, GET_SUCCESS, GET_FAILURE, GET_LOGINREQUEST, GET_LOGINSUCCESS, GET_LOGINFAILURE } from '../reducers/user';
import Perference from '../Perference';

const query = (params) => {
    return Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
}


function DetailAPI(userEmail, TodayConvert, periodType) {
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert, "periodType": periodType };
    let url = 'http://118.131.6.218:8000/detail?' + query(params);
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log('detailin');
            Perference.setRealData(res.realPowerGraph)
            Perference.setPredictData(res.predictedPowerGraph)
            Perference.setDataTable(res.revenueFromPowerList)
            Perference.setDataCountReal(res.realPowerGraph.Y)
        })

}

function SettingAPI(userEmail){
    let params = { "plantId_subId": userEmail};
        let url = 'http://118.131.6.218:8000/user/charge?'+ query(params);
        fetch(url)
          .then(res => res.json())
          .then(res => {
            Perference.setSettingCharge(res.chargeList)
          })
      
}

function DashboardAPI(userEmail, TodayConvert) {
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert };
    let url = 'http://118.131.6.218:8000/dashboard?' + query(params);
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log('dashboardin');
            Perference.setDashboard(res.realGraph.Y.concat(res.predictedGraph.Y));
            Perference.setDashboardTotal(res.todayTotalRevenue);
            Perference.setDashboardToday(res.todayRevenue);
            Perference.setDashboardTodayPredicted(res.todayPredictedRevenue);
            Perference.setDashboardCountReal(res.realGraph.Y);
        })
}
function ReportAPI(userEmail, TodayConvert) {
    let params = { "plantId_subId": userEmail, "timestamp": TodayConvert };
    let url = 'http://118.131.6.218:8000/report?' + query(params);
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log('reportin');
            Perference.setReportMonthPredicted(res.predictedRevenueThisMonth);
            Perference.setReportMonthAverage(res.compareMonthAverage);
            Perference.setReportLastYearOfMonth(res.compareLastYearOfMonth);
            Perference.setReportData(res.accumulatedRevenueGraph.Real_Y.concat(res.accumulatedRevenueGraph.pred_Y));
            Perference.setReportDataTable(res.cumulativeRevenueList);
            Perference.setReportIndexUserInvestment(res.userInvestment);
            Perference.setReportTotalRevenue(res.totalRevenue);
            Perference.setReportActualRevenue(res.actualRevenue);
            Perference.setMoney(res.userInvestment);
            Perference.setReportCountReal(res.accumulatedRevenueGraph.Real_Y);
            Perference.setReportXData(res.accumulatedRevenueGraph.Real_X.concat(res.accumulatedRevenueGraph.Pred_X));
        })
}
function* GetData(action) {
    try {
        console.log('saga / data' + JSON.stringify(action.data));
        yield call(DetailAPI, action.data.userEmail, action.data.TodayConvert, action.data.periodType);
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
        console.log('saga / data' + JSON.stringify(action.data));
        yield call(DashboardAPI, action.data.userEmail, action.data.TodayConvert);
        yield call(ReportAPI, action.data.userEmail, action.data.TodayConvert);
        yield call(DetailAPI, action.data.userEmail, action.data.TodayConvert, "day");
        yield call(SettingAPI, action.data.userEmail);
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

export default function* userSaga() {
    yield all([
        fork(watchLogin),
    ])
}