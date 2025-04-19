const fs = require('fs');
const url = require("url");

const soubor = "hlasovani/deti.json";
let dite = [];


exports.server = function(vstup,parametry,vistup){
    if(vstup.url.startsWith("/Hlasovani/deti")){

        let ha = {};
        ha.jmeno = parametry.deti;
        ha.vec = parametry.vec;
        dite.push(ha);
        console.log(dite);

        vistup.writeHead(200, {"Content-type": "application/json"});
        let o = {};
        o.dite = dite;
        vistup.end(JSON.stringify(o));

        fs.writeFileSync(soubor, JSON.stringify(dite, null, 2));

    } else if(vstup.url.startsWith("/deti/nacti")){
        
        vistup.writeHead(200, {"Content-type": "application/json"});
        let o = {};
        o.dite = dite;
        vistup.end(JSON.stringify(o));
    }
}