"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "tempmail", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*FLASH-MD* Temporary emails,Powered by *Cytra_k9* \n\n ' + "Click the links below to create unlimited TEMPORARY Emails. Powered by *CYTRA-MD.*\n\n";
    let d = ' 1️⃣ https://tempumail.com\n\n 2️⃣ https://etempmail.com\n\n 3️⃣ https://ghostmail.one\n\n 4️⃣ https://tempmailid.com';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/f1f2303ff4e39b0a3b6b3.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
