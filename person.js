
// var Person = function(t_name){
//     this.name = t_name;
//     this.alertName = function(){
//         alert(this.name)
//     }
// }

var Person = function(p_name,p_age,p_gender,p_addresss){
    //private
    var name = p_name;
    var age = p_age;
    var gender = p_gender;
    var address = p_addresss;

    this.writePersonInfo = function(){
        var str = "<br>이름 : " + name;
        str += "<br>나이 : " + age;
        str += "<br>성별 : " + gender;
        str += "<br>주소 : " + address;
        document.write(str);
    }
    //get set object
    this.setName= function(p_name){
        name = p_name;
    }
    this.getName= function(){
        return name;
    }
    
    //변수인데 함수를 넣은 것뿐
    this.play = function(){
        document.write("<br>" + name + "님께서 놀고 있습니다.");
    }
}