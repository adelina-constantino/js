function compara(n1, n2) {
    soma = n1 + n2;

    if (n1 == n2 && soma >= 10 && soma <= 20) {
        console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior ou igual a 10 e menor que 20`);
    } else if (n1 == n2 && soma >= 20) {
        console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior a 10 e maior ou igual a 20`);
    } else if (n1 == n2 && soma < 10) {
        console.log(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
    } else if (n1 != n2 && soma >= 10 && soma <= 20) {
        console.log(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior ou igual que 10 e menor ou igual a 20`);
    } else if (n1 != n2 && soma >= 20) {
        console.log(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
    } else if (n1 != n2 && soma < 10) {
        console.log(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
    } else {
        console.log('Valor inválido!');
    }
}

compara(6, 6);