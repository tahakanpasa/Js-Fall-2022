

/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
 */
const sentence1 = 'Hello Dear, how are you doing?';
let result1 = sentence1.Length >= 10 ? "15" : "10"
console.log(`\n\nresult1 -> ${result1}`);



 /**
  * replace all instances of a or A with 'Alpha', print the result in console.
  */

  const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';

  let sentence2AfterReplace_Alpha = sentence2.replace(/Aa/g, 'Alpha');
  console.log(`\n\nsentence2 -> ${sentence2}\n\n`);
  console.log(`\n\nsentence2AfterReplace_Alpha -> ${sentence2AfterReplace_Alpha}\n\n`);



  const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
  /**
   * print the result in console:
   * 1. the length of sentence-3
   * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
   * 3. does sentence-3 contains with 'Body' (ignore cases)
   * 4. index of 'BoDy' in sentence3  (ignore cases)
   * 5. the last-character in sentence-3
   * 6. word 'BoDy' is present only once. (true or false)
   */
 
   let sentence3Length = sentence3.length;
    console.log(`\nsentence3Length -> ${sentence3Length}`);

    let sentence3StartsWith = sentence3.startsWith('HeAlTh');
    console.log(`does sentence3 start with 'HeAlTh' -> ${sentence3StartsWith}`);

    let sentence3Includes_Body = sentence3.includes('Body'); 
    console.log(`\ndoes sentence3 include/contain 'Body'? -> ${sentence3Includes_Body}`);

    let indexOf_BoDy = sentence3.indexOf('BoDy');
    console.log(`Index of 'BoDy' is -> ${indexOf_BoDy}`);




