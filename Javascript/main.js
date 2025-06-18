/**  Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!*/

//creo una costante con l'indirizzo Api

const apiPictures = "https://lanciweb.github.io/demo/api/pictures/";

// recupero i nodi che mi servono per inserire il tamplate literal
const rowEl = document.querySelector(".row");
// devo recuperare come dati: date, title ed url.
let cardMarkup = "";
//eseguo la fetch Api

fetch(apiPictures)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // inizializzo la variabile dove andrò ad inserire il markup literal

    // loop forEach per avere tutti gli oggetti e poter lavorare sul singolo
    data.forEach((photo) => {
      // destrutturo per ottenere date, title ed url
      const { title, date, url } = photo;
      console.log(title, date, url);
      // creo markup literal in cui inserire date, title ed url.
      const photoMarkup = `<div class="col-12 col-sm-6 col-lg-3">
              <div class="card d-flex bg-white">
                <img
                  src="${url}"
                  alt="foto vacanza"
                />
                <div class="title">${title}</div>
                <div class="data">${date}</div>
              </div>
            </div>`;

      // quando sarà tutto pronto
      cardMarkup += photoMarkup;
    });

    //aggiungo il markup alla DOM
    rowEl.innerHTML = cardMarkup;

    // elementi della dom
    const card = document.querySelector(".card");

    const button = document.querySelector("button");

    // selezionare elemento che contiene la classe d-none o direttamente la classe ?

    console.log(card, button);

    // eventListener click vorrei che li ci fosse card

    card.addEventListener("click", myFunction);

    // logica della funzione " fai sparire la classe d- none"

    function overlayLogic(params) {
      // cosa devo aggiungere qui? .style.visibility = "visible";
    }

    // stampare in pagina il risultato
  });

/*
<div class="col-12 col-sm-6 col-lg-3">
  <div class="card d-flex bg-white">
    <img src="./assets/img/aster_angelica_Zig.jpg" alt="foto vacanza" />
    <div class="title">prova</div>
    <div class="data">25/01/25</div>
  </div>
</div>;


Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
*/

//quando "click" su una foto

// allora sparisce display: none - deve esssere una classe a parte altrimenti non ci posso laorare !

// ho bisgon di:

// problema, è possibile selezionare un elemneto che viene inserito con il template literal ?
