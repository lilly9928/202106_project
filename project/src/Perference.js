//데이터 
let Users = [];
//날짜 데이터 
let Today = new Date(2020,6,2,-2);

//대시보드 데이터 
var DashboardData = [];
var DashboardTotal='';
var DashboardToday='';
var DashboardTodayPredicted='';
var DashboardCountReal=0;

//리포트 데이터 
var ReportData=[];
var ReportDataTable=[];
var ReportMonthPredicted='';
var ReportMonthAverage='';
var ReportLastYearOfMonth='';
var ReportTotalRevenue='';
var ReportUserInvestment='';
var ReportActualRevenue='';
var ReportIndexUserInvestment=0;

//디테일 데이터 
var Data=[];
var DataTable=[];
var CountReal=0;
var User
var DetailDate=Today;
var DetailButton = 'day';
var DetailTodayConvert=DetailDate.toISOString().split('.')[0];
DetailTodayConvert= DetailTodayConvert.split('T')[0]+' '+DetailTodayConvert.split('T')[1]

//서버 날짜 값 수정
let TodayConvert=Today.toISOString().split('.')[0];
TodayConvert= TodayConvert.split('T')[0]+' '+TodayConvert.split('T')[1]

var object = {

    getToday:function(){
        return Today
    },
    getConvertToday:function(){
        return TodayConvert
    },
    getUser:function(){
        return User
    },
    setUser:function(item){
        User = item
    },
    getUsers:function(){
        return Users
    },
    setUsers:function(item){
        Users = item
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
    getDataCountReal:function(){
        return CountReal
    },
    setDataCountReal:function(item){
        CountReal = item.length
    },
    getDetailTodayConvert:function(){
        return DetailTodayConvert
    },
    setDetailTodayConvert:function(item){
        var convertItem=item.toISOString().split('.')[0];
        convertItem= convertItem.split('T')[0]+' '+convertItem.split('T')[1]
        DetailTodayConvert = convertItem
    },
    getDetailDate:function(){
        return DetailDate
    },
    setDetailDate:function(item){
        DetailDate = item
    },
    getDetailButton:function(){
        return DetailButton
    },
    setDetailButton:function(item){
        DetailButton = item
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
        ReportUserInvestment = item
    },
    //손익분기점계산
    setReportIndexUserInvestment:function(item){
        let index=0;
        for(let i= 0;i<ReportData.length;i++){
                if(item-ReportData[i]<0){
                    console.log(index);
                    if(index==0){
                        index = i;
                    }
                }
        }
        return ReportIndexUserInvestment = index
    },
    getReportIndexUserInvestment:function() {
        return ReportIndexUserInvestment
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
    getDashboardCountReal:function(){
        return DashboardCountReal
    },
    setDashboardCountReal:function(item){
        DashboardCountReal = item.length
    },
}
module.exports=object