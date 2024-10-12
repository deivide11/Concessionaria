// // var cadastro = [];
// // for (var i = 0; i <3; i++){
// //     cadastro[i] = parseFloat(prompt('Digite o nome do carro ' + (i + 1)));
// // }

// var carros = {};
// for (var i = 0; i < 2; i++){
//     carros.nome = prompt("Digite o nome do carro"),
//     carros.marca = prompt("Digite a marca do carro"),
//     carros.anoFabrica = parseInt(prompt("Digite o ano do carro")),
//     carros.kmAtual = parseFloat(prompt("Digite os quilimetros do carro"))

// console.log("Nome carro: ", carros.nome, " Marca:", carros.marca, " Ano Fabricação:", carros.anoFabrica, " km atual:", carros.kmAtual);


// // dados = [
// //     `${carros.nome}`,
// //     `${carros.marca}`,
// //     `${carros.anoFabrica}`,
// //     `${carros.kmAtual}`
// // ];

// // var ano = parseInt(prompt("Digite o ano do carro"));

// // console.log(`o ano do seu carro é ${ano}`, dados[2024 - ano]);

//  carros.anoSoma = (carros.anoFabrica[0] + carros.anoFabrica[1]) - 2024;

// console.log("voce possui o veiculo desde: ", carros.anoSoma);

// if (carros.kmAtual <= 50.000){
//     carros.kmSoma = carros.kmAtual - 50000
//     console.log("Falta: ", carros.kmSoma);
// } else {
//     console.log("deu errado");
// }

// }


var carros = [];

for (var i = 0; i < 3; i++) {
    var carro = {};
    carro.nome = prompt("Digite o nome do carro");
    carro.marca = prompt("Digite a marca do carro");
    carro.anoFabrica = parseInt(prompt("Digite o ano do carro"));
    carro.kmAtual = parseFloat(prompt("Digite os quilômetros do carro"));
    
    console.log("Nome carro: ", carro.nome, " Marca:", carro.marca, " Ano Fabricação:", carro.anoFabrica, " km atual:", carro.kmAtual);

    carro.anoSoma = 2024 - carro.anoFabrica;
    console.log("Você possui o veículo à", carro.anoSoma, " anos.");

    var kmFaltante = 50000 - carro.kmAtual;
    if (kmFaltante > 0){
        console.log("Faltam ", kmFaltante, " quilômetros para a próxima revisão.");
    } else {
        console.log("Seu veículo já ultrapassou os 50.000 quilômetros, ele precisa ser vendido!");
    }

    carros.push(carro);
}

var menorKm = carros[0];
for (var i = 1; i < carros.length; i++) {
    if (carros[i].kmAtual < menorKm.kmAtual) {
        menorKm = carros[i];
    }
}
console.log("O veículo com a menor quilometragem é:", menorKm.nome, "da marca", menorKm.marca, "com", menorKm.kmAtual, "quilômetros.");

var maisNovo = carros[0];
for (var i = 1; i < carros.length; i++) {
    if (carros[i].anoFabrica > maisNovo.anoFabrica) {
        maisNovo = carros[i];
    }
}
console.log("O veículo mais novo é:", maisNovo.nome, "da marca", maisNovo.marca, "fabricado no ano", maisNovo.anoFabrica, ".");

console.log(carros);
