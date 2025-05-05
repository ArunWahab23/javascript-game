const prompt = require("prompt-sync")({signint:true});

let input = null;

while(input !== "q")
    console.log("(w)up", (s)down,(a)screenLeft, (d)right, (q) Uit.');
    input = prompt("which way would you like to move?")