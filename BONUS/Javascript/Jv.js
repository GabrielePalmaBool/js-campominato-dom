/* 

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata

bonus: aggiunta livelli di difficoltà

*/


//Svolgimento

// dichiaro l'elemento che ha per classe background
const ContainerBack = document.querySelector(".background");

// dichiaro l'elemento che ha per classe containerGrid
const Container = document.querySelector(".containerGrid");

// dichiaro l'elemento che ha per classe containerScore
const ContainerS = document.querySelector(".containerScore");

// dichiaro l'elemento (bottone) che ha per id play,
const CreateButton = document.getElementById("play");

// dichiaro l'elemento (bottone) che ha per id play,
const DeleteButton = document.getElementById("del");

// dichiaro l'elemento (bottone) che ha per id play,
const Choice = document.getElementById("choice");

//creo e inizializzo una variabile globale a zero per i numeri all'interno dei blocchi
var num = 0;

//creo e inizializzo una variabile globale a zero per tenere traccia del numero massimo di blocchi da inserire
var MaxSquare = 0;

// dichiaro variabile booleana per tener traccia se l'array con i numeri delle bombe è stato popolato o meno
let aggiunto = false;

// dichiaro variabile array vuoto per i numeri delle bombe
const bomb = [];

//creo una variabile per tener traccia del punteggio del giocatore
let punto = 0;


// Quando viene cliccato il pulsante play
CreateButton.addEventListener("click",

    function () {

        if ( Choice.value == 1){
            MaxSquare = 100;
        }

        else if (Choice.value == 2) {
            MaxSquare = 75;
        }

        else if (Choice.value == 3) {
            MaxSquare = 50;
        }

        else {
            MaxSquare = 10;
        }

        for(let i = 0 ; i < MaxSquare; i++){

            //incremento la variabile per i numeri dei blocchi
            num++;

            //rendo visibile tutto il contenuto in pagia
            ContainerBack.style="display:block"; 

            //chiamo funzione per la creazione dei blocchi
            const mySquare = crateGrid("div","Box");

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
                        
                        for(let i= 0; i<items.length; i++){

                           
                                //controllo quelli presenti nel mio array bomb e se presenti
                                if(bomb.includes(i)){

                                    console.log(items[i]);

                                    items[i-1].classList.add("bomb");

                                    items[i].classList.add("onclick"); 

                                    //disabilito i tag a di tutti i blocchi in griglia
                                    items[i-1].style = "pointer-events: none";

                                    //disabilito i tag a di tutti i blocchi in griglia
                                    items[i].style = "pointer-events: none";

                                    //disabilito il tag a del mio pulsante play
                                    CreateButton.style = "pointer-events: none";

                                }

                                else{
                                   
                                    items[i].classList.add("onclick"); 

                                    //disabilito i tag a di tutti i blocchi in griglia
                                    items[i].style = "pointer-events: none";

                                    //disabilito il tag a del mio pulsante play
                                    CreateButton.style = "pointer-events: none";

                                }
                                

                        }

                       
                     
                    }

                    //altrimenti
                    else {

                        //aggiungo la classe desiderata
                        mySquare.classList.add("onclick");

                        //disabilito i tag a di tutti i blocchi in griglia
                        mySquare.style = "pointer-events: none";

                        punto++;
                        
                    }

                   
                        //acquisisco i valori di ogni tag Box
                        const Point = document.querySelector('.containerScore .ScoreUser');
                        
                        //acquisisco i valori di ogni tag Box
                        const ClickB = document.querySelector('.containerGrid .bomb');

                        //Verifico che ci siano tag Box in pagina
                        if(Point != null){

                            //fino a quando nel container ci saranno box
                            while (ContainerS.firstChild) {
                                
                                //elimina ogni figlio Score
                                ContainerS.removeChild(ContainerS.firstChild);
                            
                            }
                        
                        }

                        //Creo l'elemento all'interno del mio file html
                        const PuntTot = document.createElement ("div");

                        PuntTot.classList.add("ScoreUser");

                        //inserisco scritta all'interno del mio contenuto
                        PuntTot.append("Punteggio Player:"+punto);

                        ContainerS.append(PuntTot);

                        if(ClickB != null){
                            
                            //fino a quando nel container ci saranno box
                            while (ContainerS.firstChild) {
                                    
                                 //elimina ogni figlio Score
                                ContainerS.removeChild(ContainerS.firstChild);
                                
                            }
                            
                            
                            //Creo l'elemento all'interno del mio file html
                            const GameOver = document.createElement ("div");

                            GameOver.classList.add("ScoreUser");

                            //inserisco scritta all'interno del mio contenuto
                            GameOver.append(" GAME OVER: clicca su ricomincia per ripetere la partita \n Punteggio Player:"+punto);

                            ContainerS.append(GameOver);

                        }
                    
                }

            );
        
            //inserisco ogni blocco all'inerno del mio container
            Container.append(mySquare);

        }
        
    }
);



//funzione per il popolamento automatico del mio container
function crateGrid(val1,val2) {

    //controllo se l'array  con i numeri delle bombe non è stato riempito
    if(aggiunto == false){

        //imposto la variabile posizione
        let pos = 0;

        //se è stato selezionato l'ultimo livello di difficoltà
        if(Choice.value == 4){

            //faccio partire il ciclo while però diminuisco la grandezza dell'array
            while(bomb.length < 5){

                //memorizzo numeri da 1 a 10 nell'array
                let val1 = Math.floor(Math.random() * (10 +1));

                //controllo che tale valore non sia presente nel mio array bomb
                if(!bomb.includes(val1)){
                
                    //in caso affermativo inserisco il valore
                    bomb [pos] = val1;

                    pos++;

                }

            }

        }   

        //altrimenti
        else {

            //faccio partire il controllo
            while(bomb.length < 16){

                //richiamo funzione random e memorizzo nelle varie posizioni dell'array
                let val1 = Math.floor(Math.random() * (100 +1));

                //controllo che tale valore non sia presente nel mio array bomb
                if(!bomb.includes(val1)){
                
                    //in caso affermativo inserisco il valore
                    bomb [pos] = val1;

                    pos++;

                }

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
        
        //riattivo il tag a del mio pulsante play
        CreateButton.style = "pointer-events: auto";

        //rendo invisibile tutto il contenuto in pagina
        ContainerBack.style="display:none"; 

        //acquisisco i valori di ogni tag Box
        const numberBox = document.querySelector('.containerGrid .Box');

        //acquisisco i valori di ogni tag Box
        const numberSc = document.querySelector('.containerScore .ScoreUser');


        //risetto la variabile a false in modo da poter riempire di nuovo l'array bomb
        aggiunto = false;

        //setto la lunghezza dell'array bomb a zero
        bomb.length = 0;
       
        //setto a zero la variabile usata per numerare i blocchi sulla griglia
        num = 0;

        punto = 0;
        
        //Verifico che ci siano tag Box in pagina
        if(numberBox != null){

            //fino a quando nel container ci saranno box
            while (Container.firstChild) {
                
                //elimina ogni figlio box
                Container.removeChild(Container.firstChild);
            }
         
        }

         //Verifico che ci siano tag ScoreUser in pagina
         if(numberSc != null){

            //fino a quando nel container ci saranno box
            while (ContainerS.firstChild) {
                
                //elimina ogni figlio ScoreUser
                ContainerS.removeChild(ContainerS.firstChild);
            }
         
        }
        
    }
);

