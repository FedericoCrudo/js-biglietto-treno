
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
        // minorenni
        if((eta.value>0)&&(eta.value<18)){   
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase-sconto20)+'€'+ ' '+'(Sconto 20% applicato)'; 
            
        }
        // over 65
        else if(eta.value>65){
            console.log(sconto20);
            console.log(pbase);
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase-sconto40)+'€'+ ' '+'(Sconto 20% applicato)'; 
        }
        // dai 17 ai 68
        else{
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase)+'€'; 
        }
            
        
 
    }
        
          
   

    
}
