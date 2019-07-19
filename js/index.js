let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(event){
  event.preventDefault();
  
  let tagTime = document.querySelector("#time");
  let tagJogos = document.querySelector("#jogos");
  let tagGols = document.querySelector("#gols");
  let tagArtilheiro = document.querySelector("#artilheiro");

  let timeValue = tagTime.value;
  let jogosValue = tagJogos.value;
  let golsValue = tagGols.value;
  let artilheiroValue = tagArtilheiro.value;

  let newTr = document.createElement("tr");

  let newTimeTd = document.createElement("td");
  let newJogosTd = document.createElement("td");
  let newGolsTd = document.createElement("td");
  let newArtilheiroTd = document.createElement("td");
  
  newTimeTd.textContent = timeValue;
  newJogosTd.textContent = jogosValue;
  newGolsTd.textContent = golsValue;
  newArtilheiroTd.textContent = artilheiroValue;

  newTr.appendChild(newTimeTd);
  newTr.appendChild(newJogosTd);
  newTr.appendChild(newGolsTd);
  newTr.appendChild(newArtilheiroTd);

  let tableBody = document.querySelector("tbody");
  tableBody.appendChild(newTr);

})