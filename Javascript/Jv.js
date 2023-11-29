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

let aggiunto = false;

const bomb = [];

// Quando viene cliccato il pulsante play
CreateButton.addEventListener("click",

    function () {
    
        for(let i = 0 ; i < MaxSquare; i++){

            //incremento la variabile per i numeri dei blocchi
            num++;

            //chiamo funzione per la creazione dei blocchi
            const mySquare = crateSquare("div","Box");

            //aggiungo un evento ai miei blocchi
            mySquare.addEventListener ("click", 

            function () {

                    //creo una variabile alla quale andrò ad associare il valore l'elemento cliccato
                    const prova = mySquare.querySelector("h1").innerHTML;

                    //lo trasformo in un intero
                    var number = parseInt(prova);

                    //eseguo un ciclo for su tutta la lunghezza del mio array bomb
                    for(let i= 0; i< bomb.length;i++){

                        //controllo il numero con tutti i valori e se è uguale a uno di questi
                        if(number == bomb[i]){

                             //aggiungo la classe desiderata
                            mySquare.classList.add("bomb")
                        }
                        
                        //altrimenti
                        else {

                            //aggiungo la classe desiderata
                            mySquare.classList.add("onclick");
                            
                        }

                    }

                }

            );
        
            //inserisco ogni blocco all'inerno del mio container
            Container.append(mySquare);

        }
        
    }
);

//funzione per il popolamento automatico del mio container
function crateSquare(val1,val2) {

    //controllo se l'array  con i numeri delle bombe non è stato riempito
    if(aggiunto == false){

        //imposto la dimensione massima a 16 dell'array
        for(let i=0; i<16; i++)
        {
            //richiamo funzione random e memorizzo nelle varie posizioni dell'array
            bomb [i] = Math.floor(Math.random() * (MaxSquare - 1));

        }

        //segnalo che l'array è stato riempito
        aggiunto = true;

    }

    console.log(bomb);
    
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

    //restituisco tale elemento
    return square;

}



// Quando viene cliccato il pulsante elimina 
DeleteButton.addEventListener("click",

    function () {

        //acquisisco i valore nel tag p(qualora ci fosse)
        const number = document.querySelector('.containerCenter .Box');

        //risetto la variabile a false in modo da poter riempire di nuovo l'array bomb
        aggiunto = false;
       
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

