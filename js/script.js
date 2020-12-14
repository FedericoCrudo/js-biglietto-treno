
    var km=prompt("KM da Percorrere");
    var eta= prompt("Età passegero") ;
    var costo=0.21;
    var pbase=km*costo;
    var sconto20=Math.round(pbase*0.20);
    var sconto40=Math.round(pbase*0.40);
    document.getElementById('km').value= km; 
    document.getElementById('eta').value= eta; 
    console.log(km);
    console.log(pbase);
    //controllo campi
        if((eta>0)&&(eta<18)){   
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase-sconto20)+'€'+ ' '+'(Sconto 20% applicato)'; 
        }
        // over 65
        else if(eta>65){
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase-sconto40)+'€'+ ' '+'(Sconto 20% applicato)'; 
        }
        // dai 17 ai 68
        else{
            document.getElementById('result2').innerHTML= 'Il prezzo del biglietto è di: '+(pbase)+'€'; 
        }
            
        
 
    
        
          
   

    
