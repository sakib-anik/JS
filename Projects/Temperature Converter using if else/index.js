


var choice = parseInt(prompt("Press 1 and Enter to convert from Celsius to Fahrenheit\nPress 2 and Enter to convert from Fahrenheit to Celsius:"));

if(choice==1){
    var tempa = parseFloat(prompt("Enter temperature in Celsius :"));
    tempa = ((tempa/5)*9)+32;
    document.write("Temperature in Fahrenheit : "+tempa.toFixed(1));
}

else if(choice==2){
    var tempa = parseFloat(prompt("Enter temperature in Fahrenheit :"));
    tempa = ((tempa-32)/9)*5;
    document.write("Temperature in Celsius : "+tempa.toFixed(1));
}

else{
    prompt("invalid input!");
}



