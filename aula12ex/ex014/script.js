function carregar(){
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem') 
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = `Agora são ${hora} horas`
   if (hora < 12){
       //Bom dia
       img.src = 'manha.png'
       document.body.style.backgroundColor = '#f69f40'
   } else if (hora < 18){
       //Boa Tarde
       img.src = 'tarde.png'
       document.body.style.backgroundColor = '#f87501'
   } else {
       //Boa noite
       img.src = 'noite.png'
       document.body.style.backgroundColor = '#043a56'
   }
}
