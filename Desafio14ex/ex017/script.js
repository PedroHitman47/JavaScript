function tabuada(){
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    let test = document.getElementById('test')

        // erro caso não digite nada
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        // converter valor para numero
        let n = Number(num.value)
        // limpar lista
        tab.innerText=''
        // gerar tabuada
        for (let c = 0; c <= 10; c++) {
            // criar opção no select
            let item = document.createElement('option')
            // colocar item na lista
            item.text += `${n} x ${c} = ${n*c}`
            // adicionar value para server side
            item.value = `tab${c}`
            //  aparecer itens na tabela
            tab.appendChild(item)
        }
    }
}

