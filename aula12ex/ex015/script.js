function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')     
    } if (fsex[0].checked) {
        genero = 'Homem'
        if (idade < 12) {
            //criança
            img.setAttribute('src','menino.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','mjovem.png')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src','adulto.png')
        } else{
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade < 12) {
            //criança
            img.setAttribute('src','menina.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src','fjovem.png')
        } else if (idade < 60) {
            //adulto
            img.setAttribute('src','adulta.png')
        } else{
            //idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${genero} com ${idade} anos`
    res.appendChild(img)
    res.style.width = '400px'
    res.style.fontWeight = 'bold'
}