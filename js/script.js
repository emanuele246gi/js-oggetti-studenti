// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// Creare un array di oggetti di studenti.

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = [

    {
        nome: "Emanuele",
        cognome: "Bongiovanni",
        età: "19"
    }

];

var addStudente = {

    nome: "",
    cognome: "",
    età: ""

};

addStudente.nome = prompt("Inserisci il nome");

addStudente.cognome = prompt("Inserisci il cognome");

addStudente.età = prompt("Inserisci l'età");

studente.push(addStudente)

var demo = [];
for (var i = 0; i < studente.length; i++){

    demo.push(" " + studente[i].nome + " " + studente[i].cognome + " " + studente[i].età);

    document.getElementById("demo").innerHTML = demo;
}