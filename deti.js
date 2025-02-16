const fs = require('fs');
const url = require("url");

const soubor = "hlasovani/deti.json";
let dite = [];


exports.server = function(vstup,parametry,vistup){
    if(vstup.url.startsWith("/Hlasovani/deti")){

        let fileExists = fs.existsSync(soubor);
            
         if (!fileExists) {
            dite = [];
        }

        let ha = {};
        ha.deti = parametry.deti;
        ha.vec = parametry.vec;
        dite.push(ha);
        console.log(dite);
        

        vistup.writeHead(200, {"Content-type": "application/json"});
        let o = {};
        o.dite = dite;
        vistup.end(JSON.stringify(o));

        fs.writeFileSync(soubor, JSON.stringify(dite, null, 2));
    }
}