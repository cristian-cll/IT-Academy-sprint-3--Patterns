const readline = require("readline");

const clearScreen = () => {
    setTimeout(()=>{
        readline.cursorTo(process.stdout, 0)
        readline.clearScreenDown(process.stdout)
        menu()
    }, 1000);
}

const menu = () => {
    return  console.log(
    `
    ***********************************************
    1. Create player
    2. Show players
    3. Select Player
    4. Create Game
    5. Add player to a game
    6. Set score to a player
    7. View score marker
    8. Exit
    ***********************************************

    Choose one option
    `
    )
}

module.exports = {clearScreen, menu};