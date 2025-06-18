/**  Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!*/

//creo una costante con l'indirizzo Api

const apiPictures = "https://lanciweb.github.io/demo/api/pictures/";

// recupero i nodi che mi servono per inserire il tamplate literal
const rowEl = document.querySelector(".row");
const overlay = document.getElementById("overlay");
// devo recuperare come dati: date, title ed url.
let cardMarkup = "";
let imgMarkup = "";
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
      //console.log(title, date, url);
      // creo markup literal in cui inserire date, title ed url.
      const photoMarkup = `<div class="col-12 col-sm-6 col-lg-3">
              <div class="card d-flex bg-white">
                <img class="img-style"
                  src="${url}"
                  alt="foto vacanza"
                />
                <div class="title">${title}</div>
                <div class="data">${date}</div>
              </div>
            </div>`;

      // quando sarà tutto pronto
      cardMarkup += photoMarkup;

      //TL per l'overlay delle foto
      // const photoOverlay = `<img src="${url}" alt="foto vacanze" />      <button>Chiudi!</button>`; NO
      // console.log(photoOverlay);

      // imgMarkup += photoOverlay; NO
    });

    //aggiungo il markup alla DOM
    rowEl.innerHTML = cardMarkup;

    //immagini nell'overlay
    // overlay.innerHTML = imgMarkup; NO
    // elementi della dom

    // per attivate l'overlay
    //const card = document.querySelector(".card");
    const cards = document.querySelectorAll(".card");
    console.log(cards);
    // const overlay = document.getElementById("overlay");

    // per chiudere l'overlay
    const button = document.querySelector("button");

    // console.log(button, overlay);

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      console.log(card);

      // eventListener click vorrei che li ci fosse card
      card.addEventListener("click", () => {
        overlayLogic(card);
      });
    }
    // logica della funzione " fai sparire la classe d- none"

    function overlayLogic(node) {
      const img_element = document.createElement("img");
      img_element.setAttribute(
        "src",
        node.querySelector("img").getAttribute("src")
      );

      overlay.appendChild(img_element);
      overlay.style.display = "block";
      console.log(node);
    }
    // clikko su button (rimetti classe d-none?)

    button.addEventListener("click", () => {
      overlay.style.display = "none";
    });
    //display: none;

    // posso implementare le foto sempre tramite il TL ?
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


//quando "click" su una foto

// allora sparisce display: none - deve esssere una classe a parte altrimenti non ci posso laorare !

// ho bisgon di:

// problema, è possibile selezionare un elemneto che viene inserito con il template literal ?

Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.*/
