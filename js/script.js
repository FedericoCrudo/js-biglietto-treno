
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
function biglietti(){
    var km=document.getElementById('km');
    var eta= document.getElementById('eta') ;
    var costo=0.21;
    var pbase=km.value*costo;
    var sconto20=Math.round(pbase*0.20);
    var sconto40=Math.round(pbase*0.40);
    //controllo campi
    if(km.value==""|| eta.value==""){
        document.getElementById('messageb').innerHTML= '<span id="text"><span></i>';
        document.getElementById('text').innerHTML= '* Si prega di compilare tutti i campi';
        document.getElementById('result2').innerHTML= '' ;
    }
    else {  
        document.getElementById('messageb').innerHTML= '';
        if((eta.value>0)&&(eta.value<18)){   
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase-sconto20)+'€'+ ' '+'(Sconto 20% applicato)'; 
            
        }
        else if(eta.value>65){
            console.log(sconto20);
            console.log(pbase);
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase-sconto40)+'€'+ ' '+'(Sconto 20% applicato)'; 
        }
        else{
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase)+'€'; 
        }
            
        
 
    }
        
          
   

    
}
