let dayName = '' ;      // mon, tue, wed, thu, fri, sat, sun
/**
 * 
 * if dayName is mon or wed or fri
 *      print "attend the class"
 * if dayName is tue or sat
 *      print "attend lab session"
 * if dayName is thu
 *      print "self study"
 * if dayName is sun
 *      print "Enjoy"
 * 
 */

 const sports = ['football', 'Soccer', 'Baseball' , 'Rugby', 'Tennis'];

 // if 'swimming' is not present in the array, add it.
 // if already present then print the index at which it is present

 let sports_after = sports.push('swimming');
 console.log(`\nResult -> ${sports_after}\n`);