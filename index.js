const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(event){
  event.preventDefault();

  const form = document.querySelector("#champions");
  
  const champions = getValues(form);

  const newTr = createTr(champions);

  isValid(champions);

  const tableBody = document.querySelector("tbody");
  tableBody.appendChild(newTr);

  form.reset();
})

function getValues(form){
  const champions = {
    time: form.time.value,
    jogos: form.jogos.value,
    gols: form.gols.value,
    artilheiro: form.artilheiro.value
  }
  return champions;
}

function createTr(champions){
  const newTr = document.createElement("tr");

  const timeTd = createTd(champions.time);
  const jogosTd = createTd(champions.jogos);
  const golsTd = createTd(champions.gols);
  const artilheiroTd = createTd(champions.artilheiro);

  newTr.appendChild(timeTd);
  newTr.appendChild(jogosTd);
  newTr.appendChild(golsTd);
  newTr.appendChild(artilheiroTd);

  return newTr;
}

function createTd(dado){
  const newTd = document.createElement("td");
  newTd.textContent = dado;

  return newTd;
}

function isValid(champions){
  if(champions.jogos < 0 || champions.gols < 0){
    const championsErro = document.querySelector("#error-message");
    championsErro.textContent = "dados incorretos";
  }
}

const rowsFather = document.querySelector("table");
rowsFather.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fade-out");

    setTimeout(function(){
      event.target.parentNode.remove();
    }, 500);
  })

