/* 

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata

*/


//Svolgimento

// acquisisco l'elemento che ha per classe box
const Container = document.querySelector(".containerCenter");

// acquisisco l'elemento (bottone) che ha per id play,
const CreateButton = document.getElementById("play");

// acquisisco l'elemento (bottone) che ha per id play,
const DeleteButton = document.getElementById("del");

//creo e inizializzo una variabile globale a zero per i numeri all'interno dei blocchi
var num = 0;

//creo e inizializzo una variabile globale a zero per tenere traccia del numero massimo di blocchi da inserire
const MaxSquare = 100;


// Quando viene cliccato il pulsante play
CreateButton.addEventListener("click",

    function () {
    
        for(let i = 0 ; i < MaxSquare; i++){

            //incremento lavariabile
            num++;

            //chiamo funzione per la creazione dei blocchi
            const mySquare = crateSquare("div","Box");

            //aggiungo un evento ai miei blocchi
            mySquare.addEventListener ("click", 

            function () {

                    //aggiungo la classe desiderata
                    mySquare.classList.add("onclick");
                }

            );
        
            //inserisco ogni blocco all'inerno del mio container
            Container.append(mySquare);

        }
        
    }
);

//funzione per il popolamento automatico del mio container
function crateSquare(val1,val2) {

    const bomb = [];

    if (MaxSquare == 100 && bomb == []){

        console.log (bomb);
        let i = 0;

        while (i < 16){

            bomb[i] = GenRandom (num,MaxSquare);
            
            i++
        }

    }
    
    

    //Creo l'elemento all'interno del mio file html
    const square = document.createElement (val1);

    //Creo l'elemento all'interno del mio file html
    const number = document.createElement ("h1");

    //inserisco numero all'interno del mio tag h1
    number.append(num);

    //inserisco numero all'interno del quadrato il tag h1
    square.append(number);
    
    //aggiungo la classe desiderata
    square.classList.add(val2);


    for (let i = 0; i< bomb.length; i++){

        if(num == bomb[i]){

            //aggiungo la classe desiderata
            square.classList.add("bomb");

        }
     
    }

    //restituisco tale elemento
    return square;

}



// Quando viene cliccato il pulsante elimina 
DeleteButton.addEventListener("click",

    function () {

        //acquisisco i valore nel tag p(qualora ci fosse)
        const number = document.querySelector('.containerCenter .Box');
       
        num = 0;
        //Verifico che c'è
        if(number != null){

            //fino a quando nel container ci saranno box
            while (Container.firstChild) {
                
                //elimina ogni figlio box
                Container.removeChild(Container.firstChild);
            }
         
        }
        
    }
);




function GenRandom (num,MaxSquare) {

    //acquisico random il secondo numero;
    const val2 = Math.floor(Math.random() * MaxSquare);

    return val2;

}