
for (let i=0; i<=16; i+=4)
{console.log(i)}

// 1 variantas
    function kaDaryti () {
        alert("Ačiū, kad paspaudėte mane1!")
    }



    // document.body.addEventListener("click", kaDaryti);
    //
    // // 2 variantas
    // document.body.addEventListener("click", () => alert("Ačiū, kad paspaudėte mane2!"));



//elementas.onclick = kaDaryti;
//elementas.onclick = () => alert("Ačiū, kad paspaudėte mane2!");
//elementas.onclick = function() { alert("Ačiū, kad paspaudėte mane3!"); };
//let elementas = document.getElementById('uuid');
//elementas.textContent = "Šiame faile yra " + imgTaguSkaicius + " <img> tagai.";
//
// Atspausdinti rezultatą konsolėje
console.log(elementas.textContent);
// 1 uzduotis
let imgTagai = document.getElementsByTagName('img');
let imgTaguSkaicius = imgTagai.length;
console.log("HTML faile yra " + imgTaguSkaicius + " <img> tagai.");
// 2 uzduotis
let elementas = document.getElementById('uuid');
elementas.textContent = "Šiame faile yra " + imgTaguSkaicius + " <img> tagai.";
console.log(elementas.textContent);
//3 uzduotis
let mygtukas = document.querySelector('button');
mygtukas.addEventListener('click', function() {
  window.alert("Paveikslėlių kiekis: " + imgTaguSkaicius);
});
//4 uzduotis
let paveiksleliai = document.querySelectorAll('img');
for (let i = 0; i < paveiksleliai.length; i += 2) {
  paveiksleliai[i].setAttribute('alt', 'testas');
}
//5 uzduotis
elementas.style.fontSize = '24px';
elementas.style.backgroundColor = 'green';
elementas.style.width = '200px';
elementas.style.height = '200px';