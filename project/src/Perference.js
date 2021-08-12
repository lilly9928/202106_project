var Data = new Array(24).fill(0);
var Money = 0;
var User

var object = {
    getUser:function(){
        return User
    },
    setUser:function(item){
        User = item
    },
    getData:function(){
        return Data
    },
    setData:function(item){
        Data.add(item)
    },
    getMoney:function(){
        return Money
    },
    setMoney:function(item){
        Money = item
    }
}
module.exports=object