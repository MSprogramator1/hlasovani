function ponacteni3(){
    poStartu();
    ponacteni();
    ponacteni2();
}


 async function prihlastSE(){
  let  prihlasit = document.getElementById("jmeno").value;
  
  


  if(prihlasit == "Aleš"){
    alesAdmint();
    return;
  }

   else if(prihlasit){
    detiHlasovali();
  }
  
  let Hlasovani = {};
  Hlasovani.jmeno = prihlasit;
  
  let url = location.href + "prihlase";
    console.log(url);
    let re = await fetch(url,{method: "POST",body: JSON.stringify(Hlasovani)});
    let data = await re.json();
    console.log(data);
    dohromady(data);
}

function dohromady(data){
  let jmeno2 = data.jmeno;
  console.log(jmeno2);

  let vipis = document.getElementById("deti").value = jmeno2;
  vipis.innerHTML;
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
  let url = location.href + "deti/nacti";
  let re = await fetch(url,{method: "POST",body: JSON.stringify(H)});
  let data = await re.json();
  nactiOdpovedi(data);
}

async function admin() {
    let hlasovanaVec = document.getElementById("vec").value;
    console.log(hlasovanaVec);
    alert( "vaše otázka  "+ hlasovanaVec + "  je uložena");

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
  let otazkyVipis3 = document.getElementById("otazky3");
  otazkyVipis3.innerHTML = o;
}

 async function deti(){
  let deti = document.getElementById("deti").value;
  let vec = document.getElementById("h").value;
  console.log(vec);
  console.log(deti);
  alert(deti +"  tvůj hlas  " + vec + "  je odeslaný na vyhodnocení");
  poStartu();

  let Hlasovani = {};
  Hlasovani.vec = vec;
  Hlasovani.deti = deti;

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
    odpoved = odpovedi.jmeno + "<br>"+ odpovedi.vec + "<br><br>" + odpoved
  }
  
  let odpovediVipis = document.getElementById("odpovedi");
  odpovediVipis.innerHTML = odpoved;
}

async function smazSubory(){
let o = {}
o.o = "o";

smazPole();
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
   document.getElementById("vec").value = ""; 
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

function poStartu(){
  document.getElementById("lidi").style.display = "block";
  document.getElementById("admin").style.display = "none";
  document.getElementById("D2").style.display = "none";
}

function alesAdmint(){
  document.getElementById("lidi").style.display = "none";
  document.getElementById("admin").style.display = "block";
  document.getElementById("D2").style.display = "none";
}

function detiHlasovali(){ 
  document.getElementById("lidi").style.display = "none";
  document.getElementById("admin").style.display = "none";
  document.getElementById("D2").style.display = "block";   
}