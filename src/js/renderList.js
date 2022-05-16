onload = () => {
  fetch("./../repository/animals.json")
    .then((results) => results.json())
    .then((results) => {
      render(results);
    });
};

var divList = document.querySelector("#divList");

function render(animals) {
  let list = "";
  if (Array.isArray(animals)) {
    animals.forEach((animal) => {
      list += `
            <div class="card">
            <img
            src="${animal.imagem}"
            style="height: 48%; width: 100%;"
            /> 
              <div class="textcard">
                <h3>${animal.nome}</h3>
                <a>${animal.city}</a><br>
                <a style="color: #577499">${animal.doador}</a>
                <button class="info-button">INFO</button></br>
                <button class="adotar-button">QUERO!</button>
                </div>
             </div>
            `;
    });
    divList.innerHTML = list;
  }
}
