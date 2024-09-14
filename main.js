let inputvalue = document.querySelector("[name=number1]") ;
let chec1val = document.querySelector("[name=checkbox1]") ;
let chec2val = document.querySelector("[name=checkbox2]") ;
let chec3val = document.querySelector("[name=checkbox3]") ;
let chec4val = document.querySelector("[name=checkbox4]") ;
let btn = document.querySelector("button") ;
let res = document.querySelector("p") ;


btn.onclick = function (){
    let valinp = inputvalue.value ;
    let valchec1 = chec1val.checked ; 
    let valchec2 = chec2val.checked ;
    let valchec3 = chec3val.checked ;
    let valchec4 = chec4val.checked ;
const upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "[", "]", "{", "}", "|", ":", ";", "'", "<", ">", ",", ".", "/", "?"];
const arr = [] ;
let bigarr  = [] ;

if (valchec1 === true){
    for(let i = 0 ; i < upperCaseLetters.length ; i++){
        let a = upperCaseLetters[(Math.floor(Math.random() * upperCaseLetters.length))] ;
        arr.push(a) ;
    }
    console.log(arr.join("")) ;
}
if (valchec2 === true){
    for(let i = 0 ; i < lowerCaseLetters.length ; i++){
         let b = lowerCaseLetters[(Math.floor(Math.random() * lowerCaseLetters.length))] ;
        arr.push(b) ;
    }
} 
if (valchec3 === true){
    for(let i = 0 ; i < numbers.length ; i++){
        let c = numbers[(Math.floor(Math.random() * numbers.length))] ;
        arr.push(c) ;
    }
}
if (valchec4 === true){
    for(let i = 0 ; i < symbols.length ; i++){
        let d = symbols[(Math.floor(Math.random() * symbols.length))] ;
        arr.push(d) ;
    }
}

for (let j = 0 ; j < valinp; j++){
    let real = arr[(Math.floor(Math.random() * arr.length))]
    bigarr.push(real) ;
    
}

if( arr.length === 0){
    for(let i = 0 ; i < lowerCaseLetters.length ; i++){
        let a = lowerCaseLetters[(Math.floor(Math.random() * lowerCaseLetters.length))] ;
        arr.push(a) ;
    }
    for(let i = 0 ; i < upperCaseLetters.length ; i++){
        let b = upperCaseLetters[(Math.floor(Math.random() * upperCaseLetters.length))] ;
        arr.push(b) ;
    }
    for(let i = 0 ; i < numbers.length ; i++){
        let c = numbers[(Math.floor(Math.random() * numbers.length))] ;
        arr.push(c) ;
    }
    for(let i = 0 ; i < symbols.length ; i++){
        let d = symbols[(Math.floor(Math.random() * symbols.length))] ;
        arr.push(d) ;
    }
    for (let j = 0 ; j < valinp; j++){
        let real = arr[(Math.floor(Math.random() * arr.length))]
        bigarr.push(real) ;

    }
    res.textContent = bigarr.join("");
}




res.textContent = bigarr.join("");


chec1val.onclick = function(){
        res.textContent = "" ;
}
chec2val.onclick = function(){
        res.textContent = "" ;
}
chec3val.onclick = function(){
        res.textContent = "" ;
}
chec4val.onclick = function(){
        res.textContent = "" ;
}

document.body.appendChild(res) ;



}
