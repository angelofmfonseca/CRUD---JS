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

  let newTds = document.createElement("td");
  newTds.textContent = timeValue;
  newTds.textContent = jogosValue;
  newTds.textContent = golsValue;
  newTds.textContent = artilheiroValue;

  let newTr = document.createElement("tr");
  newTr.appendChild(newTds)

  let tableBody = document.querySelector("tbody");
  tableBody.appendChild(newTr);

})