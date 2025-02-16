// inporty
const url = require("url");
const http = require("http");
const fs = require("fs");

// nacitani souboru
const hlasovani = require('./hlasovani.js').server;
const deti = require("./deti.js").server;
const smazSoubory = require('./smaz soubory.js').server;

let serverms = http.createServer(server);
let port = 3030;

// soubory na servu

let html = fs.readFileSync("./indext.html");
let js = fs.readFileSync("./script.js");
//let sipka = fs.readFileSync("./šipka.png");
//let css = fs.readFileSync("./style.css");

// funce na servu
function server(vstup,vistup){
    console.log( "metoda3",vstup.method ); 

if(vstup.method == "POST"){
   console.log( "metoda4",vstup.method ); 
   let data = "";
vstup.on('data', function (kusDat) {                       
  data += kusDat;                                              
})       
console.log( "data",data);                                                       
vstup.on('end', function () {                                                                             
  if (data) {                                                  
    let parametry = JSON.parse(data);                          
    console.log(parametry);  
console.log( "metoda6",vstup.method ); 

if(vstup.url.startsWith("/Hlasovani/admin")){
   console.log("Hlasovani");
   hlasovani(vstup,parametry,vistup);
}

if(vstup.url.startsWith("/Hlasovani/deti")){
   console.log("detii");
   deti(vstup,parametry,vistup);
}

if(vstup.url.startsWith("/Hlasovani/smazSoubory")){
   console.log("smaz soubory");
   smazSoubory(vstup,vistup);

}
  } else {                                                     
                                     
  }                                                                                     
})                            

}

 if(vstup.url == "/"){
    vistup.writeHead(200,{"Content-type":"text/html"});
    html.toString();
    vistup.end(html);
 }

 if (vstup.url == "/script.js") {
    vistup.writeHead(200,{"Content-type": "application/javascript"});
    vistup.end(js);
}

/*if(vstup.url == "/favicon.ico"){
   vistup.writeHead(200,{"Content-type":"image/png"});
   vistup.end(sipka);
}
*/
}
serverms.listen(port);
