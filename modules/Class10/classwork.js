
let favSports = ['Baseball', 'Football', 'Soccer', 'Baseball', 'Fishing', 'Baseball', 'Ping pong', 'Baseball', 'Rugby', 'BASKETBALL', 'Ping pong', 'Swimming', 'Running'];

// find the index of First occurrence of 'BaseBall' (ignoring cases)


let indexAns = -1

for (let i=0 ; i <= favSports.length-1 ; i++) {
    if (favSports[i].toLowerCase().localeCompare('baseball') === 0) {
        indexAns = i;
        break;
    } 
}