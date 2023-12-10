//Replacement
function change(){
let word = document.getElementById("jchange").innerHTML;
let result = word.replace(/h/g, "j");
document.getElementById("jchange").innerHTML = result;

}

//Genetation
function Ygeneration(){
let today = new Date();
let myAge = document.getElementById('age').value;
let thisYear = today.getFullYear();
let BirthYear = thisYear - myAge;
let Generation;

switch(true){
    case (BirthYear >=1946 && BirthYear<=1964):
        Generation="You are a member of the Baby Boomer Generation!";
    break;
    case (BirthYear >=1965 && BirthYear<=1980):
        Generation="You are part of Generation X!";
    break;
    case (BirthYear >=1981 && BirthYear<=1996):
        Generation="You belong in the Y Generation!";
    break;
    case (BirthYear >=1997 && BirthYear<=2012):
        Generation="Generation Z is your generation!";
    break;
    case (BirthYear >=2013 && BirthYear<=2025):
        Generation="You are part of Generation Alpha.";
    break;
    default:
        Generation="Sorry - your generation is not listed.";
}

console.log(BirthYear);

document.getElementById('myGeneration').innerHTML=`<p>you were born in ${BirthYear} ${Generation}</p>`;

}