/*******************************************************************************
 * 
 *                      SNACKS ES6 03/11/20
 * 
 *******************************************************************************/

$(document).ready( function() {

 /**
  * 
  * JSnack 1
  * Creare un array di oggetti
  * Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
  * nome e peso.
  * Stampare a schermo la bici con peso minore con handlebars.
  * 
  */

// let bicicles = [
//     {nome: 'bolt', peso: 25, colore: 'rosso'},
//     {nome: 'mountainview', peso: 45, colore: 'nero'},
//     {nome: 'feather', peso: 15, colore: 'giallo'}
// ];

// // var peso = 0;
// // let biciLeggera = [];
// let ligthCycle = null;
// bicicles.forEach(element => {
//     if (ligthCycle == null || ligthCycle.peso > element.peso)  {
//         ligthCycle = element;
//     } 
// });

// const {nome,peso} = ligthCycle;
    // $('.content').html(
    //     `<div>
    //         <h3> Nome della bici più leggera: ${nome}</h3>
    //         <h4> Peso della bici più leggera: ${peso}</h4>
    //     </div>
    //     `
    // );


 /**
  * 
  * JSnack 2
  * Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
  * Chiedere due numeri all'utente per definire la posizione iniziale e
  * finale dal quale estrarre i valori dall'array originale.
  * Il nuovo array deve contenere gli elementi dell'array originale aventi
  * la posizione (indice array) compresa tra i due numeri inseriti dall'utente.
  * 
  */



//   const names = ['Franco', 'Luigi', 'Filippo', 'Alessandro', 'Adele', 'Alessia'];
//   const arrayVal = names.length - 1;
//   const min = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
//   while (isNaN(min) || min < 1 || min > arrayVal) {
//     min = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
//   }
//   const max = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
//   while (isNaN(max) || max < min || max > arrayVal) {
//     max = parseInt( prompt('Inserisci un valore da 1 a ' + arrayVal) );
//   }
//   let newNames = [];
//   newNames = names.filter( (element, index) => {
//       if (index >= min && index <= max) {
//           return element
//     } 
//   });
// alert('I nomi selezionati nel range tra ' + min + ' e ' + max + ' sono:\n' + newNames);


 /**
  * 
  * JSnack 3
  * Creiamo un array di oggetti (scelti da voi)
  * Creiamo una copia da questo array di partenza e aggiungiamo ai singoli
  * elementi una nuova proprietà position che contiene una lettera casuale.
  * Non dobbiamo modificare l'array iniziale.
  * 
  */

  const condominio = [
    {famiglia: 'Rossi', componenti: 4},
    {famiglia: 'Verdi', componenti: 2},
    {famiglia: 'Bianchi', componenti: 4},
    {famiglia: 'Gialli', componenti: 8}
  ]
  let condscala = [];
  
  condscala = condominio.map( (element) => {
    return {
        ...element, // QUI USO LO SPREAD
        scala: generateScala()
        }
});


//   for (var i = 0; i < condominio.length; i++) {
//     var scala = {
//       famiglia: condominio[i].famiglia,
//       componenti: condominio[i].componenti,
//       scala: generateScala()
//     }
//     condscala.push(scala);
//   }

  console.table(condominio);
  console.table(condscala);

  //Function Scala

  function generateScala() {
    let scale = 'abc';
    let scala = scale[randScala(0, scale.length - 1)];

    return scala;
  }

  function randScala(min,max) {
    return Math.floor (Math.random() * max - min + 1 ) + min;
  }

});