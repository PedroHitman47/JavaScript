function contar(){
    var finicio = document.querySelector('input#txtinicio')
    var ffim = document.querySelector('input#txtfim')
    var fpasso = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#res')

        //Erro ao não digitar nada
    if (finicio.value.length == 0 || ffim.value.length == 0) {
        res.innerHTML = 'Impossivel contar!' 
    } else {
        // substituir o valor contado anteriormente
        res.innerHTML = 'Contando: <br>'
        // converter o valor para numero
        finicio = Number(finicio.value)
        ffim = Number(ffim.value)
        fpasso = Number(fpasso.value)
        // Erro ao digitar numero negativo, zero ou nada, muda valor para 1
        if (fpasso <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            fpasso = 1 
        }
        if (ffim > finicio) {
                //ordem crescente
            for (var i = finicio; i <= ffim; i+= fpasso) {
                res.innerHTML += `${i} \u{1F449}` 
            }
        } else {
                //ordem decrescente
            for (var i = finicio; i >= ffim; i-= fpasso) {
                res.innerHTML += `${i} \u{1F449}` 
            }
        }       
                //adiciona um emoji
        res.innerHTML += `\u{1F3C1}` 
    }
}