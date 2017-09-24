var Test = function(){
    var num1 = 1;
    var num2 = 2;

    var plus = function(){ //내부에서만 사용가능 this를 사용하지 않았기 때문에
        return num1 + num2;
    }

    this.alertStr = function(param1, param2){
        var str = param1 + param2;
        alert(plus());
        alert(str);
    }
}

//구조체 데이터 타입같은 부분은 
var obj = {
    test : "1",
    test1 : "2"
};

// alert(obj.test);
// alert(obj.test1);

// obj["test"] = "1";
// alert(obj["test"]);
// obj.test = "1";
// alert(obj["test"]);