function mostrar(conteudo) {
    document.write(conteudo);
    document.write("<br>")
}

function caImc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}

let dados;

dados = window.prompt("Digite seu nome.");
mostrar("Olá " + dados + ".");

dados = window.prompt("Digite sua Idade, apenas números");

while (isNaN(dados)) {
    dados = window.prompt("Digitou a idade errado... SOMENTE NÚMEROS.");
}if (isNaN(dados) == false) {
    mostrar("Sua idade: " + dados);
}


dados = caImc(window.prompt("Digite sua altura. ex: 1.80"), window.prompt("Digite seu peso. Somente números"));

dados = dados.toFixed(1);

if (dados < 18.5) {
    mostrar("Seu IMC é: " + dados + " Abaixo do Peso.");
    mostrar("Risco: Moderado.");
    mostrar("Recomendado consultar um Nutricionista.");
    console.log(dados);
}else if (dados >= 18.5) {
    if (dados <= 24.9) {
        mostrar("Seu IMC é: " + dados + " Peso Normal.");
        console.log(dados);
    }
}else if (dados >= 25.0) {
    if (dados <= 29.9) {
        mostrar("Seu IMC é: " + dados + " Sobrepeso.");
        mostrar("Risco: Aumentado.");
        mostrar("Recomendado consultar um Nutricionista.");
        console.log(dados);
    }
}else if (dados >= 30.0) {
    if (dados <= 34.9) {
        mostrar("Seu IMC é: " + dados + " Obesidade(Grau I).");
        mostrar("Risco: Moderado.");
        mostrar("Recomendado consultar um Nutricionista.");
        console.log(dados);
    }
}else if (dados >= 35.0) {
    if (dados <= 39.9) {
        mostrar("Seu IMC é: " + dados + " Obesidade Severa(Grau II).");
        mostrar("Risco: Grave.");
        mostrar("Recomendado consultar um Nutricionista.");
        console.log(dados);
    }
}else if (dados >= 40) {
    mostrar("Seu IMC é: " + dados + " Obesidade Mórbida(Grau III).");
    mostrar("Risco: Muito Grave.");
    mostrar("Recomendado consultar um Nutricionista.");
    console.log(dados);
}

