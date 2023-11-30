/* 

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata

*/


//Svolgimento

// dichiaro l'elemento che ha per classe box
const Container = document.querySelector(".containerCenter");

// dichiaro l'elemento (bottone) che ha per id play,
const CreateButton = document.getElementById("play");

// dichiaro l'elemento (bottone) che ha per id play,
const DeleteButton = document.getElementById("del");

//creo e inizializzo una variabile globale a zero per i numeri all'interno dei blocchi
var num = 0;

//creo e inizializzo una variabile globale a zero per tenere traccia del numero massimo di blocchi da inserire
const MaxSquare = 100;

// dichiaro variabile booleana per tener traccia se l'array con i numeri delle bombe è stato popolato o meno
let aggiunto = false;

// dichiaro variabile array vuoto per i numeri delle bombe
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

                    if(bomb.includes(number)){

                         //aggiungo la classe desiderata
                         mySquare.classList.add("bomb");

                        // acquisico il numero totale di elemnti in pagina
                        const items = document.getElementsByClassName ('Box');
                        
                        for(let i= 0; i<=items.length; i++){
                          
                                //controllo quelli presenti nel mio array bomb e se presenti
                                if(bomb.includes(i)){
                                    
                                    let pos = i;
                                    
                                    items[pos-1].classList.add("bomb");

                                    items[i].classList.add("onclick");
                                }

                                else{
                                    items[i].classList.add("onclick"); 
                                }

                        }
                     
                    }

                    //altrimenti
                    else {

                        //aggiungo la classe desiderata
                        mySquare.classList.add("onclick");
                        
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

        //imposto la variabile posizione
        let pos = 0;

        //faccio partire il controllo
        while(bomb.length < 16){

             //richiamo funzione random e memorizzo nelle varie posizioni dell'array
             let val1 = Math.floor(Math.random() * MaxSquare);

             //controllo che tale valore non sia presente nel mio array bomb
             if(!bomb.includes(val1)){
                 console.log("ok");

                 //in caso affermativo inserisco il valore
                 bomb [pos] = val1;

                 pos++;

             }

        }
        console.log(bomb);
        //segnalo che l'array è stato riempito
        aggiunto = true;
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

        //setto l'array bomb a zero
        bomb.length = 0;
       
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

