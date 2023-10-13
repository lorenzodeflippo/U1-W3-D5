/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
var random = Math.floor(Math.random() * 21);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: "Lorenzo",
  surname: "de Filippo",
  age: 29,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
var me = {
  name: "Lorenzo",
  surname: "de Filippo",
  age: 29,
  skills: ["JavaScript", "HTML", "CSS", "Phyton", "Java"],
};

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("NewSkill");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
const result = dice();
console.log(result);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}
const numeroMaggiore = whoIsBigger(4, 7);
console.log(numeroMaggiore);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(testo) {
  const parole = testo.split(" ");
  return parole;
}
const testo = "I love coding";
const arrayDiParole = splitMe(testo);
console.log(arrayDiParole);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, rimuoviPrimo) {
  if (rimuoviPrimo) {
    return stringa.slice(1);
  }
}
const stringa = "Javascript";
const senzaPrimoCarattere = deleteOne(stringa, true);
console.log(senzaPrimoCarattere);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(testo) {
  return testo.replace(/\d/g, "");
}
const testo1 = "I have 4 dogs";
const testoSenzaCifre = onlyLetters(testo);
console.log(testoSenzaCifre);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email) {
  const regex = /^[A-Za-z0-9._%*]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
}
const indirizzoEmail = "test@example.com";
const isValidEmail = isThisAnEmail(indirizzoEmail);
console.log(isValidEmail);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  const daysOfWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  const today = new Date().getDay();
  return daysOfWeek[today];
}
const giornoCorrente = whatDayIsIt();
console.log("Oggi è " + giornoCorrente);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
function rollTheDices(numRolls) {
  const values = [];
  let sum = 0;
  for (let i = 0; i < numRolls; i++) {
    const roll = dice();
    values.push(roll);
    sum += roll;
  }
  return {
    sum: sum,
    values: values,
  };
}
const result1 = rollTheDices(3);
console.log(result1);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(inputDate) {
  const inputDateObj = new Date(inputDate);
  const currentDate = new Date();
  const timeDifference = currentDate - inputDateObj;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}
const inputDate = new Date("2023-01-01");
const daysPassed = howManyDays(inputDate);
console.log(
  "Sono trascorsi ${daysPassed} giorni da ${inputDate} fino ad oggi."
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  const today = new Date();
  const birthDate = new Date(today.getFullYear(), 3, 21);
  const isSameDate = today.getDate();
  console.log("E' il mio compleanno oggi?", isBirthday);
}

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
  return obj;
}
const myObject = {
  name: "John",
  age: 30,
  country: "USA",
};
const updateObject = deleteProp(myObject, "age");
console.log(updateObject);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  Infinity(movies.length === 0);
  {
    return null;
  }
  let newest = movies[0];
  for (const movie of movies) {
    if (parseInt(movie.Year) > parseInt(newest.Year)) {
      newest = movie;
    }
  }
  return newest;
  const year = parseInt(movies.Year);
  if (!isNaN(year) && (newest === null || year > newest.Year)) {
    newest = {
      Title: movie.Title,
      Year: movie.Year,
      imdbID: movie.Type,
      Poster: movie.Poster,
    };
  }
}
console.log("Il film più recente è uscito nell'anno", newest);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length;
}
const movieCount = countMovies(movies);
console.log("Il numero totale di film nell'array è:", movieCount);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  const yearsArray = movies.map((movie) => parseInt(movie.Year));
  return yearsArray.filter((year) => !isNaN(year));
}
const yearsArray = onlyTheYears(movies);
console.log("Array con gli anni di uscita dei film", yearsArray);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyLastMillenium(movies) {
  const currentYear = new Date().getFullYear();
  return movies.filter((movie) => {
    const year = parseInt(movie.Year);
    return !isNaN(year) && year >= 2000 && year <= currentYear - 1;
  });
}
const lastMilleniumMovies = onlyLastMillenium(movies);
console.log("Film prodotti nel millennio scorso:", lastMilleniumMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAlltheYears(movies) {
  const yearsArray = movies.map((movie) => parseInt(movie.Year));
  const validYears = yearsArray.filter((year) => !isNaN(year));
  const sum = validYears.reduce((total, year) => total + year, 0);
  return sum;
  const totalYearsSum = sumAlltheYears(movies);
  console.log("Somma di tutti gli anni di produzione dei film", totalYearsSum);
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(movies, searchString) {
  const searchResult = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });
  return searchResult;
}
const searchTerm = "Lord";
const matchingMovies = searchByTitle(movies, searchTerm);
console.log(
  "Film che contengono la parola'",
  searchTerm,
  " ' nel titolo:",
  matchingMovies
);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(movies, searchString) {
  const match = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });
  const unmatch = movies.filter((movie) => {
    return !movie.Title.toLowerCase().includes(searchString.toLowerCase());
  });
  return { match, unmatch };
}
const searchTerm1 = "Lord";
const { match, unmatch } = searchAndDivide(movies, searchTerm1);
console.log(
  "Film che contengono la parola' ",
  searchTerm1,
  " ' nel titolo:",
  match
);
console.log(
  "Film che non contengono la parola' ",
  searchTerm1,
  " ' nel titolo:",
  unmatch
);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(movies, index) {
  if (index < 0 || index >= movies.lenght) {
    console.error("Indice non valido.L'array non è stato modificato.");
    return movies.slice();
  }
  const updatedMovies = movies.slice(0, index).concat(movies.slice(index + 1));
  return updatedMovies;
}
const indexToRemove = 2;
const updatedMovieArray = removeIndex(movies, indexToRemove);
console.log("Array di film con l'elemento rimosso:", updatedMovieArray);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const containerElement = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const tdElements = document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
for (let i = 0; i < tdElements.length; i++) {
  const tdText = tdElements[i].textContent;
  console.log("Contenuto del td numero", i + 1, ":", tdText);
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
  links[i].style.backgroundColor = "red";
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const newItem = document.createElement("li");
newItem.textContent = "Nuovo elemento della lista";
const myList = document.getElementById("myList");
myList.appendChild(newItem);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const myList1 = document.getElementById("myList");
while (myList1.firstChild) {
  myList1.removeChild(myList.firstChild);
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const tableRows = document.getElementsByTagName("tr");
for (let i = 0; i < tableRows.length; i++) {
  tableRows[i].classList.add("test");
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
