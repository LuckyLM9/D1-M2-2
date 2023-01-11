/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
la string (Stringa) serie di caratteri racchiusi da apici singolo o doppi

//let auto1 ="panda";

let auto2 ="twingo'; 

il number numeri float 

//let numeroIntero = 42

//console.log(numeroIntero);

//let numeroVirgolaMobile = 3.14;

// console.log(numeroVirgolaMobile);

//let somma = numeroIntero + numeroVirgolaMobile;
// console.log(somma) => 45.14

il Boolean rappresenta il vero o falso come valore - True o false

//let età = 18;

//if (età >= 18);

//console.log ("Benvenuto nel Sito")

//else console.log ("Spiacente non hai l'età per accedere")

null

undefined


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
Un oggetto è una raccolta di copie chiave-valore. un oggetto può rappresentare qualsiasi informazioni
di una persona( come per età o nome ), ai dati di un gioco ( come il punteggio o livello)

let persona ={
    nome: "mario";
    età: "30";
    sesso: "Maschio";
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

per effettuare un'addizione (una somma) dei numeri 12 e 20

let num1 = 12; // dichiaro una variabile

let num2 = 20; // dichiaro la seconda

let somma = num1+num2; // dichiaro una terza variabile

console.log(somma); // stampa 32

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

per creare una variabile in javascript e assegnare un valore, si può
utilizzare la parola chiave "let seguita dal nome della variabile e del simbolo di assegmazione(=)"

let x = 12;

console.log(x); // stampa

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
per creare una variabile in javascript e assegnare un valore, si può
utilizzare la parola chiave "let seguita dal nome della variabile e del simbolo di assegmazione(=)"

let name = "luca";

console.log(name);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 12 ; // dichiaramo una variabile

let y = 4 ;

let differenza = y - x ; //terza variabile

console.log(differenza); // stampa -8


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john",
  e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

per creare due variabili e assegnare dei valori, utilizziamo let seguita dal nome
delle variabili e dal simbolo di assegnazione (=)

let name1 ="john"; //var1

let name2 ="John"; //var2

per verificare che name1 sia diversa da name2, si può utilizzare l'operatore di diseguaglianza (!=)

console.log(name1 != name2); //stampa true

console.log(name1.toLowerCase() == name2.toLowerCase())

/* SCRIVI QUI LA TUA RISPOSTA */
