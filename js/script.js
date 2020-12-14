
function copy(){
    var contenuto=document.getElementById('result-password');
    //selezioniamo il contenuto
    contenuto.select();
    document.execCommand("Copy");
}

function password(){
    var nome=document.getElementById('nome');
    var cognome=document.getElementById('cogn');
    var colore=document.getElementById('color');
   
    //controllo campi
    if(nome.value==""|| cognome.value==""|| colore.value==""){
        document.getElementById('message').innerHTML= '<span id="text"><span></i>';
        document.getElementById('text').innerHTML= '* Si prega di compilare tutti i campi';
        document.getElementById('result').innerHTML= '' ;
    }
    else{
        document.getElementById('message').innerHTML= '';
       
       document.getElementById('result').innerHTML=
        '<span>La tua passowrd è:'+'<textarea id="result-password">'+ nome.value+cognome.value +colore.value+19 + '</textarea>'+ '<i onclick="copy()" class="far fa-clipboard">'+'</span>' ;
       
       
       
        // if(isNaN(nome)){//per controllare che i valori inseriti non siano numerici
        //     document.getElementById('text').innerHTML= '* ';   
        //     console.log(isNaN(nome));
        // }
        // else{
        //     document.getElementById('text').innerHTML= '* ';  
        
        // }
      
          
    }

    
}
