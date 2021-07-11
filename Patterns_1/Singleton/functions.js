const readline = require("readline");

const clearScreen = () => {
    setTimeout(()=>{
        readline.cursorTo(process.stdout, 0)
        readline.clearScreenDown(process.stdout)
        menu()
    }, 1500);
}

const menu = () => {
    return  console.log(
    `
    ***********************************************
    1. Create player
    2. Create Game
    3. Add player to a game
    4. Win score for a board player
    5. Lose score for a board player
    6. View score marker
    7. Test (Fill data automatically)
    8. Clear screen
    9. Exit
    ***********************************************

    Choose one option
    `
    )
}


const findData = (name, arr) =>{

    const element = arr.find(item => item.name === name)
    if(element){
        return element
    }
    return false
}





module.exports = {clearScreen, menu, findData};