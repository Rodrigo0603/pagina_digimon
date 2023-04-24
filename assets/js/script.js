
// Realiza la busqueda por nombre del digimon
function buscarDigimon() {
    fetch(`${'https://digimon-api.vercel.app/api/digimon'}${'/name/'}${DigiName.value}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('img1').setAttribute('src', data[0].img)
            document.getElementById('nameprin').innerHTML = data[0].name
            document.getElementById('levelprin').innerHTML = data[0].level
        })
}

// Entrega el listado completo de los digimons disponibles en la API
function tarjetasDigimon() {
    const digimonContainer = document.getElementById("digimoncontainer")

    const card = document.createElement("div");
    card.className = "row card-title justify-content-center";


    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {

                const card2 = document.createElement("div");
                card2.className = "card";
                card2.style.width = "18rem";

                const image = document.createElement("img");
                image.className = "card-img-top";
                image.src = data[i].img;

                const card3 = document.createElement("div");
                card3.className = "card-body";

                const nombredigimon = document.createElement('h5');
                nombredigimon.className = "card-title text-center"
                nombredigimon.textContent = data[i].name;

                const niveldigimon = document.createElement('h5');
                niveldigimon.className = "card-title text-center"
                niveldigimon.textContent = data[i].level;

                digimonContainer.appendChild(card);
                card.appendChild(card2);
                card2.appendChild(image);
                card2.appendChild(card3);
                card3.appendChild(nombredigimon);
                card3.appendChild(niveldigimon);
            }
        })
}