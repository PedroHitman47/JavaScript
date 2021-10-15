let num = [5, 8, 2, 9, 3]
num.pop() // retira o ultimo valor inserido
num.push(1) // inseri um novo valor no final
num.sort() // ordena os valores
console.log(num)
console.log(`O vetor tem ${num.length} posições`) // conta os valores
console.log(`A primeiro valor do vetor é ${num[0]}`) // primeiro valor
let pos = num.indexOf(4) // busca a posição do valor
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
