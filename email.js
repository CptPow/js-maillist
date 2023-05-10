
//creo array
let note = []
//chiedo email
do {
    email = prompt("Inserisci la tua email");
    //pusho in array
    note.push(email);
    //creo element "li"
    const liCreate = document.createElement("li");
    //inietto la email
liCreate.innerHTML = email;
//prendo "ul"
let ul = document.querySelector("#ulAppend");
//appendo il "li"
ul.appendChild(liCreate);
//chiudo il prompt a 5 richieste
} while (note.length <= 4);




