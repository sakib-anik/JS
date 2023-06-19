var len = document.querySelectorAll(".mybutton").length;

for(var i=0;i<len;i++){
    var myVar = document.querySelectorAll(".mybutton")[i];
    var heading = document.querySelector("h1");
    myVar.addEventListener("click",function(){
        var text = this.innerHTML;
        heading.innerHTML = text +" is clicked";
    });
}