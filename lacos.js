// let limite = Number (prompt("Até que número você quer contar ?"));
// let numero = 1;

// while( numero <= limite){
//     console.log(numero);

//     numero = numero + 1;
// }

// console.log ("Fim");


// let tabuada = Number(prompt("DIgite um número para ver a tabuada"));
// let limite = Number(prompt (" Até quando vai a tabuada para você"));
// let i = 0;

// while( i <= limite){
//     console.log(`${tabuada} X ${i} = ${tabuada*i}`);

//     i = i + 1;
//     // i++; ( incremento pode ser feito assim também )
// }

continuar = true;

while ( continuar) {
    
    let idade = Number (prompt("Qual a sua idade? "));
    let renda = Number (prompt("Qual é o valor da sua renda? "));
    let emprestimo = Number (prompt("Qual o valor do empréstimo? "));
    
    if ( idade >= 21 && idade <= 55 && renda >= 1000 && emprestimo <= (renda * 15) && emprestimo >= 500 ){
        console.log("Passou");
        let parcelas = Number (prompt("Em quantas parcelas quer pagar? "));
        if ( parcelas>= 3 && parcelas <= 24){
            alert(`Empréstimo Aprovado, o valor dele será R$${emprestimo} em ${parcelas} vezes !\n O valor da parcela ficou ${((emprestimo / parcelas) * 1.085).toFixed(2)}`);
            continuar = false;
        }

        else{
            alert("Empréstimo reprovado pelas quantidades de parcelas!")
            continuar = confirm("Deseja tentar novamente? ");
    }
        }
    else {
        alert("Empréstimo Reprovado !!!");
        continuar = confirm("Deseja tentar novamente? ");
    }
}