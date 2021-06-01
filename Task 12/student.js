var today = new Date();
var hourNow = today.getFullYear();
function student(name,age){
    this.name = name;
    this.age = age;
    this.checkAvailability = function (){
        return hourNow - this.age;
    };
};

var quaystudent = new student('quay','1997');
var parkstudent = new student('park','1998');

var details1 =  quaystudent.name + ' age:';
 details1 += quaystudent.checkAvailability();

var elstudent = document.getElementById('hotel1');
elstudent.textContent = details1;

var details2 = parkstudent.name + ' age: ';
 details2 += parkstudent.checkAvailability();

var elstudent = document.getElementById('hotel2');
elstudent.textContent = details2;