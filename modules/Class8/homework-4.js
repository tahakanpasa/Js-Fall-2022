/**
 * Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 */

 const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 let lookfor = 'BASKETBALL'

 if (sports.includes(lookfor, 2)) {
    console.log('BASKETBALL is mentioned in the sports array');
} else if (sports.includes(lookfor, 2)) {
    console.log('BASKETBALL is present at index-2');
} else if (sports.includes(lookfor,2)) {
} else{
    let removedValue = sports.splice(2,1, 'BASKETBALL');
    console.log(`Removed Value -> ${removedValue}`);
 }
 
/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */
 let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 let lookfor2 = 'Earth'
 if (planets.includes(lookfor2, 0)) {
    console.log('\n\nEarth is mentioned in expected index\n\n');
} else {
    console.log(planets);
    
}

/**
 * 
  * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */


 let studentScore = 160
 let maxScore = 150
 let percentege = (studentScore / maxScore) * 100;
 let grade = '';

 if (studentScore < maxScore || studentScore < 0) { 
console.log(`Invalid student score`);
} else {
    let percentege = (studentScore / maxScore) * 100;

    if (percentege >= 91.00) {
        grade = 'A';
    }
    else if (percentege >= 81.00) {
        grade = 'B';
    }
    else if (percentege >= 71.00) {
        grade = 'C';
    }
    else if (percentege >= 61.00) {
        grade = 'D';
    }
    else if (percentege >= 51.00) {
        grade = 'E';
    }
    else if (percentege >= 41.00) {
        grade = 'F';
    }
}




/**
 * 
 *  * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */
