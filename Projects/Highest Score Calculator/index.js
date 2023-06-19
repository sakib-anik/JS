function GetHighestScore(marks){
    marks.sort(function(a,b){
        return b-a;
    });
    return marks[0];
}

var marks = new Array();
var i = 0;
while(true){
    text = prompt('Enter Number or Q to quit:');
    if(text=='Q'||text=='q'){
        document.write('Program Exited!<br/>');
        break;
    }
    marks[i]=parseInt(text);
    i++;
}
var highestMark = GetHighestScore(marks);
if(marks.length>0)
    document.write('Highest Mark : <br/>'+highestMark);