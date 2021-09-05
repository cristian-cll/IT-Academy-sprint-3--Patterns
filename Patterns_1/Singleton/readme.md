## Singleton pattern

Player scoring system implementing the score marker as a singleton

## How to run

```
node app
```

This command will run an application that interacts with the user through the terminal

```json
--> MGSX game has been created!

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
```

From startup, the only game will be created and the score marker will be instantiated.  
```
--> MGSX game has been created!
```
You can test that it is a singleton by typing the number 9. This will return this error:
```
Singleton classes can't be instantiated more than once.
```

## How to use

Typing...
1. Create the player through a unique name  
2. Select the player and add him to the game  
3. Select the player and make him earn points  
4. Select the player and make him lose points
5. View the game scoreboard  
6. Automatically fill in the data to test it

```
SolidSnake player has been created!
Otacon player has been created!
Player 'SolidSnake' added to 'MGSX' game
Player 'Otacon' added to 'MGSX' game
SolidSnake player has won 300 of score.
SolidSnake player has lost 100 of score.
SolidSnake player has won 50 of score.
Otacon player has won 50 of score.
Otacon player has lost 20 of score.
Filled succesfully. You can view the score marker typing 5.
```
This function also uses a singleton pattern. You can only instantiate once

7. Clean the terminal  
8. End the application  
9. Try instantiating the score marker again



## Two ways to create a singleton

* Checking by the constructor if the instance exists and returning an error or the same instance (Used in exercise):

```javascript
class ScoreMarker {
    constructor(){
        if (ScoreMarker._instance) {
            throw new Error("Singleton classes can't be instantiated more than once.");
        }
        ScoreMarker._instance = this;
    }
    
    methods..
}
```

* Directly export the instantiated class

```javascript
class ScoreMarker {
    constructor(){
    }
    
    methods..
}
```

```javascript
module.exports = new ScoreMarker();
```

In this case it is not necessary to check the instance by the constructor  
You always get the same instance of the class