/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// creo variabile button                        OKAY
const buttonClick = document.querySelector('button');

// creo variabile per dare padre al figlio nel ciclo for             OKAY
const mainContentEl = document.querySelector('.wrapper');
 
// richiamo il button al click                 OKAY
buttonClick.addEventListener('click', function(){
    // prima di ricrearle, svuoto la riga per non ripeterlo a ogni click
    mainContentEl.innerHTML = '';
    // creo ciclo di 100 numeri
    for (let i= 1; i <=100; i++){
        const currentSquare = newSquare();
        const squareContent= i;
        mainContentEl.appendChild(currentSquare);
        // numeri da inserire con squareContent
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;
        // apro altro click, quando clicco su cella, si colora DA INSERIRE NEL FOR ALTRIMENTI NON FUNZIONA
        currentSquare.addEventListener('click', function(){
        currentSquare.classList.add('blue')
        console.log(squareContent)
        });
    }
// chiuso ciclo for
});
// chiusura click



// funzione                                     OKAY
function newSquare (){
    const newElement = document.createElement ('article');
    newElement.classList.add ('square');
    return newElement;
};