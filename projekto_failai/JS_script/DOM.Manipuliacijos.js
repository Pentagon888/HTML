const vrd ="Gzegoz Muci";
const manoVardasDOM= document.getElementBYId("manoVardas");
manoVardasDOM.innerHTML=vrd;
//Pasirinkti elementa
let tavovardas = 'Jonas Mindaugas';
// Pakeisti elemento turini

tavovardasPAKEISTAS.innerHTML = vrd;
let elementas = document.getElementById('uuid');elementas.textContent = "Šiame faile yra " + imgTaguSkaicius + " <img> tagai.";
// Atspausdinti rezultatą konsolėjeconsole.log(elementas.textContent);

// Modifikuojam ASIDE nuorodu turini
// Pasirinkti elementa
const soninesNuorodos = document.querySelectorAll("aside > main > a");

for (let i = 0; i < soninesNuorodos.length; i++) {
    let nuoroda = soninesNuorodos[i];
    nuoroda.innerHTML = vrd;
}


// Žemiau esantis kodas yra skirtas atsitiktiniams skaičiams
// generuoti ir juos įterpti į sąrašo elementus

// Pasirinkti element[us] į kuriuos dėsime atsitiktinius skaičius
const sarasoElementai = document.querySelectorAll("#elementas li");

// Generuojam atsitiktinius skaičius ir įterpiam į sąrašo elementus sukdami ciklą
for (let i = 0; i < sarasoElementai.length; i++) {
    // Ištraukiam elementą iš masyvo/sąrašo
    let elementas = sarasoElementai[i];

    // Generuojam atsitiktinį skaičių
    let atsitiktinisSkaicius = Math.floor(Math.random() * 100);

    // Įterpiam atsitiktinį skaičių į sąrašo elementą
    elementas.innerHTML =  'Atsitiktinis skaicius: ' + atsitiktinisSkaicius;
}