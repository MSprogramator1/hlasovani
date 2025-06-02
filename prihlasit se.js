const fs = require('fs');
const url = require("url");
const generateUniqueId = require('generate-unique-id');

const soubor = "hlasovani/prihlasit se.json";
let hlas = [];

  function generuj(){
     return generateUniqueId({
        length:10,
        useLetters:false
    });
  }

exports.server = function(vstup,parametry,vistup){
    if(vstup.url.startsWith("/prihlase")){

       let fileExists = fs.existsSync(soubor);
      
          if (!fileExists) {
              hlas = [];
          }
          
        let ha = {};
        ha.jmeno = parametry.jmeno;
        ha.id = generuj();
        hlas.push(ha);
        console.log(hlas)
        
         let phr = parametry.jmeno;
          vistup.writeHead(200, {"Content-type": "application/json"});
          let o = {};
          o.jmeno = phr;
          vistup.end(JSON.stringify(o));

        fs.writeFileSync(soubor, JSON.stringify(hlas, null, 2));



    }
}