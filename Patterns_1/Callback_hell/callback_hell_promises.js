const {readdir, readFile, writeFile} = require("fs").promises; //Converts to promises modules fs
const {join} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str => str.split("").reverse().join("");

// Read and reverse contents of text files in a directory

readdir(inbox)
    .then(files => files.map(file => 
      readFile(join(inbox, file), "utf8")
        .catch(() => console.log("Error: File error"))
        .then(data => writeFile(join(outbox, file), reverseText(data)))
        .then(() => console.log(`${file} was successfully saved in the outbox!`))
        .catch(() => console.log("Error: File could not be saved!"))
    ))
    .catch(() => console.log("Error: Folder inaccessible"))