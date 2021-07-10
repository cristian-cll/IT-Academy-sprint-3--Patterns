const {readdir, readFile, writeFile} = require("fs").promises;
const {join} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

// Read and reverse contents of text files in a directory

async function readAndReverse(){
  
  const files = await readdir(inbox)
    .catch(err => console.log("Error: Folder inaccessible"))

  try{
  files.forEach( async file => {

    const data = await readFile(join(inbox, file), "utf8") 
    .catch(err =>  console.log("Error: File error"))

    await writeFile(join(outbox, file), reverseText(data))
    .then(res => console.log(`${file} was successfully saved in the outbox!`))
    .catch(err => console.log("Error: File could not be saved!"))
  })

  }
  catch(err){
  console.log(err);    
  }
}
readAndReverse()