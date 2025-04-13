function ponacteni3(){
    ponacteni();
    ponacteni2();
}


  
 async function prihlastSE(){
  let prihlasit = document.getElementById("jmeno").value;
  console.log(prihlasit);
 
  if(prihlasit == "Aleš"){
    alesAdmint();
   
  }

   else if(prihlasit){
    detiHlasovali();
  }
  
}

async function ponacteni() {
  let Hlasovani = {};
  let url = location.href + "Hlasovani/nacti";
  let re = await fetch(url,{method: "POST",body: JSON.stringify(Hlasovani)});
  let data = await re.json();
  nactiOtazky(data);
}

async function ponacteni2() {
  let H = {};
  let url = location.href + "deti/nact";
  let re = await fetch(url,{method: "POST",body: JSON.stringify(H)});
  let data = await re.json();
  nactiOdpovedi(data);
}

async function admin() {
    let hlasovanaVec = document.getElementById("vec").value;
    console.log(hlasovanaVec);

    let Hlasovani = {};
    Hlasovani.hlasovanaVec = hlasovanaVec;

    let url = location.href + "Hlasovani/admin";
    console.log(url);
    let re = await fetch(url,{method: "POST",body: JSON.stringify(Hlasovani)});
    let data = await re.json();
    console.log(data);
    smazText(hlasovanaVec);
    nactiOtazky(data);
}

function nactiOtazky(data){
  let o ='';
  for(let otazky of data.hlasovani){
     o = otazky.hlas + "<br><br><button onclick='vybrani(`"+otazky.id+"`,`"+otazky.hlas+"`)'>hlasovat</button>" + "<br>" + o 
}
  let otazkyVipis = document.getElementById("otazky");
  otazkyVipis.innerHTML = o;
}

 async function deti(){
  let deti = document.getElementById("deti").value;
  let vec = document.getElementById("h").value;
  console.log(vec);
  console.log(deti);

  let Hlasovani = {};
  Hlasovani.deti = deti;
  Hlasovani.vec = vec;

  let url = location.href + "Hlasovani/deti";
  console.log(url);
  let re = await fetch(url,{method: "POST",body: JSON.stringify(Hlasovani)});
  let data = await re.json();
  console.log(data);
  smazText2(deti,vec);
  nactiOdpovedi(data);
}

function nactiOdpovedi(data){
  let odpoved = "";
  for(let odpovedi of data.dite){
    odpoved = odpovedi.deti + "<br>"+ odpovedi.vec + "<br><br>" + odpoved
  }
  
  let odpovediVipis = document.getElementById("odpovedi");
  odpovediVipis.innerHTML = odpoved;
}



async function smazSubory(){
let o = {}
o.o = "o";

let url = location.href + "Hlasovani/smazSoubory";
console.log(url);
let re = await fetch(url,{method: "POST",body: JSON.stringify(o)});
let data = await re.json();
console.log(data);
Hlasovani = {};
data = {};
}



// vzhledové funse aplikace
function vybrani(hlas,id){
document.getElementById("id").value = hlas;
document.getElementById("h").value = id;
}

function smazText2(di,vec){
di = document.getElementById( "deti").value = "";
vec = document.getElementById("h").value = "";
}

function smazText(){
   document.getElementById("ve").value = ""; 
}

function smazPole(){
document.getElementById("odpovedi").style.display = "none";
document.getElementById("otazky").style.display = "none";
}

function ukazOtayky(){
document.getElementById("otazky").style.display = "block";
}

function ukazOdpovedy(){
document.getElementById("odpovedi").style.display = "block";
}


function alesAdmint(){
  document.getElementById("lidi").style.display = "none";
  document.getElementById("D").style.display = "none";
  document.getElementById("h").style.display = "none";
  document.getElementById("deti").style.display = "none";
  document.getElementById("odeslatH").style.display = "none";
}

function detiHlasovali(){    
  document.getElementById("lidi").style.display = "none";
  document.getElementById("vec").style.display = "none";
  document.getElementById("přidat").style.display = "none";
  document.getElementById("přidat").style.display = "none";
  document.getElementById("odpovedi").style.display = "none";
  document.getElementById("deti").style.display = "none";
  document.getElementById("konec").style.display = "none";
  document.getElementById("h2").style.display = "none";
}