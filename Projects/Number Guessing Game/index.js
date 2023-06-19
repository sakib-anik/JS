
var count = 0;
var countVictory = 0;
var countLost = 0;
while(count<5){
    count++;
    var num = parseInt(prompt('Enter Your Guess between 1 to 5 : '));
    var rand = Math.floor(Math.random() * 5) + 1;
    if(num == rand){
        console.log('You Have won !');
        countVictory++;
    }
    else{
        console.log('You Have Lost ! Random Number was '+rand);
        countLost++;
    }
}

document.write('You have won : '+countVictory+' times<br/>You have Lost : '+countLost+' times');