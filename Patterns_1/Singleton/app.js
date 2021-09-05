const readline = require("readline");
const scoreMarker = require("./models/ScoreMarker");
const Player = require("./models/Player");
const Game = require("./models/Game");
const { menu, clearScreen, findData } = require("./UserInterface");

// Unassigned players to a game
let players = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const game = new Game("MGSX");
menu();

rl.on('line', (line) => {
    switch (line.trim()) {
        case '1': // Create a new player
            rl.question("Whats your name? ", (name) => {
                const player = findData(name, players);
                if (!player) return players.push(new Player(name));
                console.log(`'${name}' player already exists. Try another name.`);
            });
            break;
        case '2': // Add player to a game
            if (players.length === 0) {
                return console.log("There are no unassigned players to a game. Create one!");
            }
            console.log(`Players : ${players.length} \n`, players);
            rl.question("Select player by name: ", (name) => {
                const player = findData(name, players)
                if (!player) return console.log(`This '${name}' player does not exist`);
                console.log(player.name, "selected");
                game.join(player);
                players = players.filter(player => player.name !== name);
            });
            break;
        case '3': // Win score for a game player
            if (game.board.length === 0) {
                return console.log("There are no players on the board game. Create a player and add it to a game.");
            }
            console.log(game.board);
            rl.question("Select board's player by name: ", (name) => {
                const player = findData(name, game.board);
                if (!player) return console.log(`This '${name}' player does not exist`);

                rl.question("Input the score to win: (positive integer number) ", (number) => {
                    if (Math.sign(parseInt(number)) === 1) {
                        return player.win(parseInt(number));
                    }
                    return console.log("Is not a number!");
                })

            });
            break;
        case '4': // Lose score for a game player
            if (game.board.length === 0) {
                return console.log("There are no players on the board game. Create a player and add it to a game.");
            }
            console.log(game.board);
            rl.question("Select board's player by name: ", (name) => {
                const player = findData(name, game.board);
                if (!player) return console.log(`This '${name}' player does not exist`);
                rl.question("Input the score to lose: (positive integer number) ", (number) => {
                    if (Math.sign(parseInt(number)) === 1) {
                        return player.lose(parseInt(number));
                    }
                    return console.log("Is not a number!");
                })

            });
            break;
        case '5': // View score marker
            if (game.board.length === 0) {
                return console.log("There are no players on the board game. Create a player and add it to a game.");
            }
            console.log(`***********************************************\n                SCORE MARKER                 \n***********************************************`);
            console.log(game.showScores());
            console.log(`***********************************************\n                    WINNER                    \n***********************************************`);
            console.log("The winner is: ", game.getWinner());

            break;
        case '6': // Test (Fill data automatically)
            try {
                test();
                console.log("Filled succesfully. You can view the score marker typing 5.");
            } catch (error) {
                console.log(error.message);
            }
            break;
        case '7': // Clear screen
            clearScreen();
            break;
        case '8': // Exit
            rl.close();
            break;
        case '9': // Try to instance again Score Marker Singleton
            try {
                new scoreMarker();
            } catch (error) {
                console.log(error.message);
            }
            break;
        default:
            console.log('Say what? I might have heard `' + line.trim() + '`' + '\nThis option does not exist.');
            clearScreen();
            break;
    }
})


rl.on("close", function () {
    console.log("BYE BYE !!!");
    process.exit(0);
});


const test = () => {

    if (test._instance) {
        throw new Error("The data has already been filled in!.");
        // You can allow the constructor to be called multiple times, instead of "throw new Error", "return test._instannce" to refer to the same instance
    }

    test._instance = this;

    players.push(new Player("SolidSnake"));
    players.push(new Player("Otacon"));

    const SolidSnake = findData("SolidSnake", players);
    const Otacon = findData("Otacon", players);

    game.join(SolidSnake);
    game.join(Otacon);

    SolidSnake.win(300);
    SolidSnake.lose(100);
    SolidSnake.win(50);
    Otacon.win(50);
    Otacon.lose(20);

}