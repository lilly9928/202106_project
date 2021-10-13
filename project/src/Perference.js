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
        ReportDataTable = item
    },
    getReportMonthPredicted:function(){
        return ReportMonthPredicted
    },
    setReportMonthPredicted:function(item){
        ReportMonthPredicted = item
    },
    getReportMonthAverage:function(){
        return ReportMonthAverage
    },
    setReportMonthAverage:function(item){
        ReportMonthAverage = item
    },
    getReportLastYearOfMonth:function(){
        return ReportLastYearOfMonth
    },
    setReportLastYearOfMonth:function(item){
        ReportLastYearOfMonth = item
    },
    getReportTotalRevenue:function(){
        return ReportTotalRevenue
    },
    setReportTotalRevenue:function(item){
        ReportTotalRevenue = item
    },
    getReportActualRevenue:function(){
        return ReportActualRevenue
    },
    setReportActualRevenue:function(item){
        ReportActualRevenue = item
    },
    getMoney:function(){
        return ReportUserInvestment
    },
    setMoney:function(item){
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
        DashboardTotal = item
    },
    getDashboardToday:function(){
        return DashboardToday
    },
    setDashboardToday:function(item){
        DashboardToday = item
    },
    getDashboardTodayPredicted:function(){
        return DashboardTodayPredicted
    },
    setDashboardTodayPredicted:function(item){
        DashboardTodayPredicted = item
    },
}
module.exports=object