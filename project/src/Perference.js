//데이터 
let Users = [];
//날짜 데이터 
const Time = new Date();

let Today = new Date(2020, 5, 20, Time.getHours() + 9, Time.getMinutes());

//대시보드 데이터 
var DashboardData = [];
var DashboardTotal = '';
var DashboardToday = '';
var DashboardTodayPredicted = '';
var DashboardCountReal = 0;

//리포트 데이터 
var ReportData = [];
var ReportDataTable = [];
var ReportMonthPredicted = '';
var ReportMonthAverage = '';
var ReportLastYearOfMonth = '';
var ReportTotalRevenue = '';
var ReportUserInvestment = '';
var ReportActualRevenue = '';
var ReportIndexUserInvestment = 0;

//디테일 데이터 
var DataResult = [];
var RealData = [];
var PredictData = [];
var DataTable = [];

var CountReal = 0;
var User
var DetailDate = Today;
var DetailButton = 'day';
var DetailXData = [];
var DetailTodayConvert = DetailDate.toISOString().split('.')[0];
DetailTodayConvert = DetailTodayConvert.split('T')[0] + ' ' + DetailTodayConvert.split('T')[1]

//서버 날짜 값 수정
let TodayConvert = Today.toISOString().split('.')[0];
TodayConvert = TodayConvert.split('T')[0] + ' ' + TodayConvert.split('T')[1]

var object = {

    getToday: function () {
        return Today
    },
    getConvertToday: function () {
        return TodayConvert
    },
    getUser: function () {
        return User
    },
    setUser: function (item) {
        User = item
    },
    getUsers: function () {
        console.log(Users)
        return Users
    },
    setUsers: function (item) {
        item=item.map(
            (item,index)=>({
                id:index,
                value:item
            })
        );
        Users = item
    },

    //상세데이터
    getDataResult: function () {
        const PredictDataTime = PredictData[0].time;
        var check = 0;
        for (var i = 0; i < RealData.length; i++) {
            if (RealData[i].time == PredictDataTime) {
                check = 1;
            }
        }
        const newRealData = RealData.map(
            (item, index) => ({
                real: item.real,
                predict: PredictDataTime == item.time ? PredictData[0].predict : 0,
                time: item.time,
            })
        );
        if (check == 0) {
            DataResult = newRealData.concat(PredictData);
            return DataResult
        } else if (check == 1) {
            const newPredictData = PredictData.filter(value => value.time !== PredictDataTime)
            DataResult = newRealData.concat(newPredictData);
            return DataResult
        }
    },
    getRealData: function () {
        return RealData
    },
    setRealData: function (item) {
        const itemY = item.Y
        const newData = item.X.map(
            (item, index) => ({
                predict: 0,
                real: itemY[index],
                time: item,

            })
        );
        console.log(newData)
        RealData = newData
    },
    getPredictData: function () {
        return PredictData
    },
    setPredictData: function (item) {
        const itemY = item.Y
        console.log(item);
        const newData = item.X.map(
            (item, index) => ({
                real: 0,
                predict: itemY[index],
                time: item,

            })
        );
        console.log(newData)
        PredictData = newData
    },
    getDataTable: function () {
        return DataTable
    },
    setDataTable: function (item) {
        item = item.map(value => value.map((number,index) => index==1?number.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","):number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")));
        DataTable = item
    },
    getDataCountReal: function () {
        return CountReal
    },
    setDataCountReal: function (item) {
        CountReal = item.length
    },
    getDetailTodayConvert: function () {
        return DetailTodayConvert
    },
    setDetailTodayConvert: function (item) {
        var convertItem = item.toISOString().split('.')[0];
        convertItem = convertItem.split('T')[0] + ' ' + convertItem.split('T')[1]
        DetailTodayConvert = convertItem
    },
    getDetailDate: function () {
        return DetailDate
    },
    setDetailDate: function (item) {
        DetailDate = item
    },
    getDetailButton: function () {
        return DetailButton
    },
    setDetailButton: function (item) {
        DetailButton = item
    },
    getDetailXData: function () {
        return DetailXData
    },
    setDetailXData: function (item) {
        console.log(item);
        var convert = item.map(value => value.split('T')[0].split('-')[2] + '일' + value.split('T')[1].split(':')[0] + '시');
        console.log(convert);
        DetailXData = convert
    },

    //리포트데이터
    getReportData: function () {
        return ReportData
    },
    setReportData: function (item) {
        ReportData = item
    },
    getReportDataTable: function () {
        return ReportDataTable
    },
    setReportDataTable: function (item) {
        item = item.map(value => value.map(
            (number, index) => {
                if (index == 0) {
                    return number.split('T')[0]
                }
                else return number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }));
        ReportDataTable = item
    },
    getReportMonthPredicted: function () {
        return ReportMonthPredicted
    },
    setReportMonthPredicted: function (item) {
        ReportMonthPredicted = item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getReportMonthAverage: function () {
        return ReportMonthAverage
    },
    setReportMonthAverage: function (item) {
        ReportMonthAverage = item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getReportLastYearOfMonth: function () {
        return ReportLastYearOfMonth
    },
    setReportLastYearOfMonth: function (item) {
        ReportLastYearOfMonth = item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getReportTotalRevenue: function () {
        return ReportTotalRevenue
    },
    setReportTotalRevenue: function (item) {
        ReportTotalRevenue = item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getReportActualRevenue: function () {
        return ReportActualRevenue
    },
    setReportActualRevenue: function (item) {
        item = item.map(number => number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        ReportActualRevenue = item
    },
    getMoney: function () {
        return ReportUserInvestment
    },
    setMoney: function (item) {
        ReportUserInvestment = item
    },
    //손익분기점계산
    setReportIndexUserInvestment: function (item) {
        let index = 0;
        for (let i = 0; i < ReportData.length; i++) {
            if (item - ReportData[i] < 0) {
                if (index == 0) {
                    index = i;
                }
            }
        }
        return ReportIndexUserInvestment = index
    },
    getReportIndexUserInvestment: function () {
        return ReportIndexUserInvestment
    },

    //대시보드데이터
    getDashboard: function () {
        return DashboardData
    },
    setDashboard: function (item) {
        DashboardData = item
    },
    getDashboardTotal: function () {
        return DashboardTotal
    },
    setDashboardTotal: function (item) {
        DashboardTotal = item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getDashboardToday: function () {
        return DashboardToday
    },
    setDashboardToday: function (item) {
        DashboardToday = item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getDashboardTodayPredicted: function () {
        return DashboardTodayPredicted
    },
    setDashboardTodayPredicted: function (item) {
        DashboardTodayPredicted = item.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    getDashboardCountReal: function () {
        return DashboardCountReal
    },
    setDashboardCountReal: function (item) {
        DashboardCountReal = item.length
    },
}
module.exports = object