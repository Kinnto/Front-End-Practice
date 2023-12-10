let flip = 0;
let head = 0;
let tail = 0;

function flipCoin(){
    const result = Math.floor(Math.random()*2);

    flip++;

    if(result === 0 ){
        head++;
    }else{
        tail++;
    }
    
    let cImg = document.getElementById("Cimage");
    cImg.src = result === 0 ? 'imag/coin H.jpg' : 'imag/coin.jpg';

    document.getElementById('Ratio').textContent = `${head}:${tail}`;


    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var cell = row.insertCell(0);
    var cell1 = row.insertCell(1);

    cell.textContent = flip;
    cell1.textContent = result === 0 ? 'head' : 'tail';
}