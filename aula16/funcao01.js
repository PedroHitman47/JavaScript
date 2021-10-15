function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimpar(12)) // mostrar o resultado da função
let num = parimpar(7) // colocar o resultado da função em uma variavel
console.log(num)