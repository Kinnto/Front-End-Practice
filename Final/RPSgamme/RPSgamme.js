let paper = "PAPER.jpg";
let rock = "ROCK.jpg";
let scissors = "SCISSORS.jpg";
function StartGame(){
    var Player1Img='';
    var Player2Img='';

    let rchoise = Math.floor(Math.random()*3)+1;
//images
    switch(rchoise){
        case 1:
            Player1Img = paper;
            break;
        case 2:
            Player1Img = rock;
            break;
        case 3:
            Player1Img = scissors;    
            break;
        default:
            console.log("no work :(")
    }

    document.getElementById('choice1').innerHTML = '<img src="image/'+Player1Img+'"/>';
    rchoise = Math.floor(Math.random()*3)+1;
    switch(rchoise){
        case 1:
            Player2Img = paper;
            break;
        case 2:
            Player2Img = rock;
            break;
        case 3:
            Player2Img = scissors;    
            break;
        default:
            console.log("no work :(")
    }
    document.getElementById('choice2').innerHTML = '<img src="image/'+Player2Img+'"/>';

//gaming
    var winner;

    if(Player1Img === Player2Img ){
        winner="It's a tie! Play again";
    }else if((Player1Img === paper && Player2Img === rock)||
    (Player1Img === rock && Player2Img === scissors)||
    (Player1Img === scissors && Player2Img === paper)){
        winner = "Player 1 wins! Play again.";
    }else{
        winner = "Player 2 wins! Play again.";
    }

//result
document.getElementById('result').innerHTML= 'Player 1 chose ' + Player1Img + '. Plyer 2 chose' + Player2Img +'. ' + winner;

//add row in table
var table= document.getElementById("table");
var row = table.insertRow(1);
var cell = row.insertCell(0);
var cell1 = row.insertCell(1);

cell.innerHTML = "Game";
cell1.innerHTML = winner;

}