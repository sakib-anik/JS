var obj = document.getElementById("para").classList;
var obj1 = document.getElementsByTagName("p")[1].classList;
function addstyle(){
    obj.add("para-style");
    obj1.add("para-style");
}

function removestyle(){
    obj.remove("para-style");
    obj1.remove("para-style");
}