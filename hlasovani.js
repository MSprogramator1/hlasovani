const fs = require('fs');
const url = require("url");
const generateUniqueId = require('generate-unique-id');

const soubor = "hlasovani/hasovani.json";
let hlas = [];

  function generuj(){
     return generateUniqueId({
        length:10,
        useLetters:false
    });
  }

exports.server = function(vstup,parametry,vistup){
    if(vstup.url.startsWith("/Hlasovani/admin")){
       
        let fileExists = fs.existsSync(soubor);

        if (!fileExists) {
          hlas = [];
        }

        let ha = {};
        ha.hlas  = parametry.hlasovanaVec;
        ha.id = generuj();
        hlas.push(ha);
        console.log(hlas)
        

        vistup.writeHead(200, {"Content-type": "application/json"});
        let o = {};
        o.hlasovani = hlas;
        o.id = generuj();
        vistup.end(JSON.stringify(o));

        fs.writeFileSync(soubor, JSON.stringify(hlas, null, 2));
    }
}