const prompt = require('prompt-sync')();

console.clear();

let sim = 0;

console.log('                                                              EM BUSCA DE FAZER UMA SOPA          ');
console.log();

console.log('por favor responda  apenas com sim ou  nao ')

console.log()

console.log('em um belo dia você resolve fazer uma sopa e então vai ao mercado comprar os ingredientes ');

console.log();

let  pergunta1 = prompt('você deseja pegar um carrinho de compras no mercado ?');

if (pergunta1 == "sim"){
    sim++
        
}

console.log();

console.log('e então você  vai ao setor de massas')

console.log();

let  pergunta2 = prompt('você deseja pegar macarrão para sua sopa ? ')

console.log()

if (pergunta2 == "sim"){
    sim++
    

}
console.log(' e em seguida você vai direto para o açougue')

console.log()

let  pergunta3 = prompt('você deseja comprar frango  para sua sopa ?')

console.log()

if (pergunta3 == "sim"){
    sim++
   
}                              
console.log('logo apos sair do açougue você encontra  o setor de legumes ');

console.log()

let  pergunta4 = prompt('você deseja pegar cenoura para sua sopa ?');

console.log()

if (pergunta4 == "sim"){
    sim++
    
}              
console.log('ainda no setor de legumes você avista a couve flor ');

console.log()

let  pergunta5 = prompt(' você deseja pegar couve flor para sua sopa ?');

if (pergunta5 == "sim"){
    sim++
    
}            

console.log()

console.log(`você escolheu sim ${sim} vezes`)

console.log();

if (sim == 0 ){
    console.log("Você falhou miseravelmente")
}

if (sim == 1||sim == 2){
    console.log("Você falhou, mas ainda consegue fugir da situação")
}
if (sim == 3){
    console.log("você chegou perto de conseguir alcançar seu objetivo, mas acabou falhando por pouco")

}
if (sim == 4){
    console.log("Depois de muito esforço você conquistou seu objetivo, embora não de maneira perfeita")
}
if (sim == 5){
    console.log("Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações")
}
console.log()