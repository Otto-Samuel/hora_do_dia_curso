function carregar() {
    var bom = document.getElementById('bom');
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `agora são ${hora} horas e ${minuto} minutos`;

    if(hora >= 0 && hora < 12){
       // BOM DIA   
       bom.innerHTML = 'BOM DIA🌄';
       img.src = 'manhã.png';
       document.body.style.background = 'rgb(19,147,173)'
       bom.style.color = 'black';
       
    } 
    
    else if(hora >= 12 && hora < 18){
       // BOA TARDE
       bom.innerHTML = 'BOA TARDE🌅';
       img.src = 'tarde.png';
       document.body.style.background = 'rgb(245,177,109)';
       bom.style.color = 'black';
       
    }

    else{
       // BOA NOITE
       bom.innerHTML = 'BOA NOITE🌛';
       img.src = 'noite-lua.png';
       document.body.style.background = 'rgb(5,68,110)';
       bom.style.color = 'black';
     
    }


}
