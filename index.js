let submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(event){
  event.preventDefault();

  let form = document.querySelector("#champions");
  
  let champions = getValues(form);

  let newTr = createTr(champions);

  isValid(champions);

  let tableBody = document.querySelector("tbody");
  tableBody.appendChild(newTr);

  form.reset();
})

function getValues(form){
  let champions = {
    time: form.time.value,
    jogos: form.jogos.value,
    gols: form.gols.value,
    artilheiro: form.artilheiro.value
  }
  return champions;
}

function createTr(champions){
  let newTr = document.createElement("tr");

  let timeTd = createTd(champions.time);
  let jogosTd = createTd(champions.jogos);
  let golsTd = createTd(champions.gols);
  let artilheiroTd = createTd(champions.artilheiro);

  newTr.appendChild(timeTd);
  newTr.appendChild(jogosTd);
  newTr.appendChild(golsTd);
  newTr.appendChild(artilheiroTd);

  return newTr;
}

function createTd(dado){
  let newTd = document.createElement("td");
  newTd.textContent = dado;

  return newTd;
}

function isValid(champions){
  if(champions.jogos < 0 || champions.gols < 0){
    let championsErro = document.querySelector("#error-message");
    championsErro.textContent = "dados incorretos";
  }
}

let rowsFather = document.querySelector("table");
rowsFather.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fade-out");

    setTimeout(function(){
      event.target.parentNode.remove();
    }, 500);
  })