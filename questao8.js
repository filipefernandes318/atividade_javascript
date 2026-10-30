function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7.0) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(calcularMedia(8, 7, 9));
console.log(calcularMedia(5, 6, 4));
console.log(calcularMedia(7, 7, 7));