let v = [] // esta fora do escopo pois é utilizado pelas duas funções.

function adicionar(){
    // DOM's num e lista não funciona fora da função adicionar().
    let num = document.getElementById('txtnum') 
    let lista = document.getElementById('selista')
    // ERRO se numero não esta entre 1 ou 100, já esta na lista ou não foi digitado nada.
    if(Number(num.value) <= 0 || Number(num.value) > 100  || v.indexOf(Number(num.value)) != -1 || num.length == 0) {
        window.alert('Valor inválido ou ja encontrado na lista.')
    } else {
        res.innerHTML = '' // limpa a resposta 
        v.push(Number(num.value)) // adiciona um valor no array
        let item = document.createElement('option') // cria option para select
        item.text = `Valor ${num.value} adicionado.` // cria texto para option
        lista.appendChild(item) // adiciona option na lista
    }
    num.value = '' // limpa imput number
    num.focus() // foca no imput number
}

function finalizar(){
    // Dom res não funciona fora da função finalizar()
    let res = document.getElementById('res')
    if (v.length == 0) { // erro se não digitar nada
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = v.length // pega quantidade
        let maior = v[0] // pera primeiro valor do array
        let  menor = v[0] 
        let soma = 0 // defini variavel
        let media = 0 
        for(let pos in v){
            soma += v[pos] // soma array
            if (maior < v[pos]) {
                maior = v[pos] // maior numero do array
            }
            if (menor > v[pos]) {
                menor = v[pos] // menor numero do array
            }
            media = soma / total // media do array
        }
        res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
    

}
