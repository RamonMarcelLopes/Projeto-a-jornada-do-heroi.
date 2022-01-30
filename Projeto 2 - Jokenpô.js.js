const  prompt = require('prompt-sync')();


console.clear();

do {

let nomeDeUsuario = prompt("digite seu nome de usuario :")

console.log();

let vitoriaseu = 0;
let vitoriaspc = 0;



let rodadas = +prompt("quantas rodadas você deseja jogar ")

console.log();

for(let i = 0; i < rodadas; i++){

let elementos = ["pedra","papel","tesoura"];


let rpu = prompt("escolha um elemento : ")

console.log();

let rpc = Math.floor(Math.random() * 3);


let ff = elementos[rpc]

if( rpu == "pedra"  || rpu == "papel" || rpu == "tesoura" ){



let resposta1 = rpu
let resposta2 = ff

console.log("o computador escolheu" , ff);

console.log();

// pedra

if(resposta1 == "pedra" && resposta2 =="tesoura"){
console.log(nomeDeUsuario,"ganhou")
vitoriaseu++
}

if(resposta1 == "pedra" && resposta2 == "papel"){
console.log("o  computador ganhou") 
vitoriaspc++
}

if(resposta1 == "pedra" && resposta2 == "pedra"){
    console.log("deu impate")
}

// tesoura

if(resposta1 == "tesoura" && resposta2 == "pedra"){
    console.log("o computador ganhou")
    vitoriaspc++
}
    
if(resposta1 == "tesoura" && resposta2 == "papel"){
    console.log(nomeDeUsuario,"ganhou") 
    vitoriaseu++
    
}   

if(resposta1 == "tesoura" && resposta2 == "tesoura"){
    console.log("deu impate")
 
}

//papel
    
if(resposta1 == "papel" && resposta2 == "pedra"){
    console.log(nomeDeUsuario,"ganhou")
    vitoriaseu++
};     



if(resposta1 == "papel" && resposta2 == "tesoura"){
        console.log("o computador ganhou") 
        vitoriaspc++   
}

if(resposta1 == "papel" && resposta2 == "papel"){
    console.log("deu impate")

}}else{console.log("resposta invalida rodada desconciderada")
 
}
}

console.log();
console.log(`você teve ${vitoriaseu} vitorias`)
console.log();
console.log(`o computador teve ${vitoriaspc} vitorias`)
console.log();
if(vitoriaseu > vitoriaspc){
    console.log("você venceu ")
    console.log();
}else if(vitoriaseu == vitoriaspc){
        console.log("deu empate")
        console.log();
}else{
    console.log("o computador ganhou")
}
console.log();
var continuarJogando = prompt("voce quer jogar novamente :")

} while (continuarJogando == "sim")
