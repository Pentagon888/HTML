let x=5;
let y = 6;
let z = x+y;
console.log(z);

x=50;
y=10;

let vardas = "Jonas";
let vieta = "4";
if (vieta === 1) {console.log( vardas, "užėmė 1 vietą");}
else if (vieta === 2) {console.log( vardas, "užėmė 2 vietą");}
else if (vieta === 3) {console.log( vardas, "užėmė 3 vietą");}
else {console.log( vardas, "medalio nelaimejo");}

for (let i=0; i<=16; i+=4)
{console.log(i)}

let a = 2+2;

switch (a){
    case3:
        console.log('a reiksme yra maziau uz 4 ');
        break;
    case4:
        console.log ('a reiksme yra lygi 4');
        break;
    case5:
        console.log ('a reiksme daugiau uz 4');
        break;
    default:
        console.log ('a reiksme yra nezinoma ');
        break;
}

let nerikiuotasMasyvas=[9,4,6,5,8,0,7,2,3,1];
let rykiuotasMasyvas = [1,2,3,4,5,6,7,8,9,10];
let stringuMasyvas = ['a','b','nulis','vienas','c','Vardas','adresas'];
let misrusMasyvas=[5,'b','0',1,'c',777,{"vardas":"Jonas"}];
let asmuo = misrusMasyvs[6]
console.log(asmuo);
console.log(asmuo.vardas);
for (let i =0; i < nerikiuotasMasyvas.length; i++){
console.log(nerikiuotasMasyvas[i]);
}




let fruit =["Apple", "Orange","Plum"];

console.log(fruits[0]);//Apple
console.log(fruits[1]);//Orange
console.log(fruits[2]);//Plum

let fruits[2]='Pear';
let fruits[3]='Lemon';
console.log (fruits.length);

let arr =["Apple","Orange","Plum"];
for ( let i = 0; i< arr.lenght;i++){
console.log(arr[i]);
}
let fruits = ["Apple","Orange","Plum"];
for (let fruit of fruits){
console.log(fruit);
}


function spausdinti (duomenys)
console.log ('--' +duomenys+ '--');
let userName = 'John';
function showMessage(){
userName="Bob";//(1) changed the outer variable let message = ' Hello,'+userName; console.log(message);
}

console.log(userName);// John before the function call
showMessage();
console.log(userName);