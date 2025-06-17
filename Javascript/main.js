/**  Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!*/

//creo una costante con l'indirizzo Api

const apiPictures = "https://lanciweb.github.io/demo/api/pictures/";

// recupero i nodi che mi servono per inserire il tamplate literal

// devo recuperare come dati: date, title ed url.

//eseguo la fetch Api

fetch(apiPictures)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // inizializzo la variabile dove andrò ad inserire il markup literal
    let cardMarkup = "";
    // loop forEach per avere tutti gli oggetti e poter lavorare sul singolo
    data.forEach((photo) => {
      // destrutturo per ottenere date, title ed url
      const { title, date, url } = photo;
      console.log(title, date, url);
      // creo markup literal in cui inserire date, title ed url.
      const photoMarkup = ``;

      // quando sarà tutto pronto
      //cardMarkup += photoMarkup
    });

    //aggiungo il markup alla DOM
  });
