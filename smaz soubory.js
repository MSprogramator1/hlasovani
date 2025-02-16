const fs = require('fs');
const url = require("url");

const deti = "hlasovani/deti.json";
const hasovani = "hlasovani/hasovani.json";


exports.server = function(vstup,vistup){
    if(vstup.url.startsWith("/Hlasovani/smazSoubory")){
        console.log("smaz soubor");
        if(fs.existsSync(deti)){
            fs.unlinkSync(deti);
        }
        
        if(fs.existsSync(hasovani)){
            fs.unlinkSync(hasovani);
        }

        vistup.writeHead(200, {"Content-type": "application/json"});
        let o = {};
       // o.dite = dite;
        //vistup.end(JSON.stringify(o));

    }
}