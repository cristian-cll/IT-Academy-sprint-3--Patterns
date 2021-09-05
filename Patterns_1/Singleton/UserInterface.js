const readline = require("readline");

const clearScreen = () => {
    setTimeout(() => {
        readline.cursorTo(process.stdout, 0);
        readline.clearScreenDown(process.stdout);
        menu();
    }, 1500);
}

const menu = () => {
    return  console.log(
    `
    ***************************************************
    |                    MGSX Game                    |
    ---------------------------------------------------
    |                      MENU                       |
    ***************************************************
    | 1. Create player                                |
    | 2. Add player to a game                         |
    | 3. Win points for a game player                 |
    | 4. Lose point for a game player                 |
    | 5. View score marker                            |
    | 6. Test (Fill data automatically)               |
    | 7. Clear screen                                 |
    | 8. Exit                                         |
    | 9. Try to instance again Score Marker Singleton |
    ***************************************************

    Choose an option by number:
    `
    );
}


const findData = (name, arr) =>{

    const element = arr.find(item => item.name === name)
    if(element){
        return element;
    }
    return false;
}



module.exports = {clearScreen, menu, findData};