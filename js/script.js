/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

// creo variabile button
const buttonClick = document.querySelector('button');

// richiamo il button al click
buttonClick.addEventListener('click', function(){
    // creo ciclo di 100 numeri
    for (let i= 1; i <=100; i++){

    }
}

// do padre al figlio nel ciclo for
const mainContentEl = document.querySelector('.wrapper');

// funzione
function newSquare (){
    const newElement = document.createElement ('article');
    newElement.classList.add ('square');
    return newElement;
});