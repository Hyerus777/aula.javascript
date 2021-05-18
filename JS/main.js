function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    /*console.log(document.getElementById("agradecimento"));*/

    /*alert("Obrigado por Clicar")*/
}

function redirecionar(){
    window.open("https://pt.wikipedia.org/wiki/JavaScript");
    /*window.location.href = "https://pt.wikipedia.org/wiki/JavaScript";*/
}

function trocar(elemento){
    elemento.innerHTML = "Opções";
}

function voltar(elemento){
    elemento.innerHTML = "Selecionar";
}

function load(){
    alert("Página Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}



/*function soma(n1, n2){
    return n1 + n2;
}
var validar;
function validaIdade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é a Sua Idade?")
console.log(validaIdade(idade))
*/

/*Date
var d = new Date();
alert (d.getMonth()+1)*/



/*Estrutura de repetição for
var count = 0
for(count=0; count <= 5; count++){
    alert(count);
}*/


/* Estrutura de repetição while
var count = 0
while (count <= 5){
    console.log(count)
    count++
}*/


/* Estrutura condicional if, else
var nome = prompt("Qual o Seu Nome?");
var idade = prompt("Qual a sua Idade?");
if(idade >= 18){
    alert("Acesso Permitido = Pessoa Capaz");
}else{
    alert("Minoridade detectada: Pessoa Incapaz");
};
var frase = "Acesso Negado"

console.log(frase.replace("Negado", "Permitido"))*/


/*console.log(frase.toUpperCase())*/


/*alert(nome + " tem " + (idade) + " anos.");
console.log(nome)
console.log("11 + 20 é igual a ")
console.log(n1 + n2)
*/