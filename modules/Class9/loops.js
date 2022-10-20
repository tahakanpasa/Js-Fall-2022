sports = ['Football', 'Soccer', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong'];
/**
 * print the value if either (value has an 'o') OR (value has length > 5 and less than 10)
 * 
 * Football
 * Soccer
 * Baseball
 * Ping pong
 * 
 */


for (let ind = 0 ; ind < sports.length ; ind++) {
    if (sports[ind].toLoverCase().includes('o') || (sports[ind].length > 5 && sports[ind].length < 10)) {
        console.log(sports[ind]);
    }
}

/**
 * Store sports-array in a new variable in reverse order AND convert values in Titlecase
 */
 sports = ['FootBall', 'soCCer', 'BasEbAll', 'Rugby', 'BASKETBALL', 'Ping pong'];
 let reverse_sports = [];
 /**
  * reverse_sports = ['Ping Pong', 'Basketball', 'Rugby', 'Soccer', 'Football'];
  */