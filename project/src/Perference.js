var DashboardData = [];
var DashboardTotal='';
var DashboardToday='';
var DashboardTodayPredicted='';

var ReportData=[];
var ReportDataTable=[];
var ReportMonthPredicted='';
var ReportMonthAverage='';
var ReportLastYearOfMonth='';
var ReportTotalRevenue='';
var ReportUserInvestment='';
var ReportActualRevenue='';

var Data=[];
var DataTable=[];
var User

var object = {

    getUser:function(){
        return User
    },
    setUser:function(item){
        User = item
    },

    //상세데이터
    getData:function(){
        return Data
    },
    setData:function(item){
        Data = item
    },
    getDataTable:function(){
        return DataTable
    },
    setDataTable:function(item){
        item= item.map(value => value.map(number => number.toFixed(0)));
        DataTable = item
    },

    //리포트데이터
    getReportData:function(){
        return ReportData
    },
    setReportData:function(item){
        ReportData = item
    },    
    getReportDataTable:function(){
        return ReportDataTable
    },
    setReportDataTable:function(item){
        item= item.map(value => value.map(
            (number,index) =>{
                if(index==0){
                    return number.split('T')[0]
                }
                else return number.toFixed(0);
        }));
        ReportDataTable = item
    },
    getReportMonthPredicted:function(){
        return ReportMonthPredicted
    },
    setReportMonthPredicted:function(item){
        ReportMonthPredicted = item.toFixed(0)
    },
    getReportMonthAverage:function(){
        return ReportMonthAverage
    },
    setReportMonthAverage:function(item){
        ReportMonthAverage = item.toFixed(0)
    },
    getReportLastYearOfMonth:function(){
        return ReportLastYearOfMonth
    },
    setReportLastYearOfMonth:function(item){
        ReportLastYearOfMonth = item.toFixed(0)
    },
    getReportTotalRevenue:function(){
        return ReportTotalRevenue
    },
    setReportTotalRevenue:function(item){
        ReportTotalRevenue = item.toFixed(0)
    },
    getReportActualRevenue:function(){
        return ReportActualRevenue
    },
    setReportActualRevenue:function(item){
        item= item.map(number => number.toFixed(0));
        ReportActualRevenue = item
    },
    getMoney:function(){
        return ReportUserInvestment
    },
    setMoney:function(item){
        item= item.map(number => number.toFixed(0));
        ReportUserInvestment = item
    },


    //대시보드데이터
    getDashboard:function(){
        return DashboardData
    },
    setDashboard:function(item){
        DashboardData = item
    },
    getDashboardTotal:function(){
        return DashboardTotal
    },
    setDashboardTotal:function(item){
        DashboardTotal = item.toFixed(0)
    },
    getDashboardToday:function(){
        return DashboardToday
    },
    setDashboardToday:function(item){
        DashboardToday = item.toFixed(0)
    },
    getDashboardTodayPredicted:function(){
        return DashboardTodayPredicted
    },
    setDashboardTodayPredicted:function(item){
        DashboardTodayPredicted = item.toFixed(0)
    },
}
module.exports=object