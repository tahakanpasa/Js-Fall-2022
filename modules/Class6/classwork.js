/**
 * Add 'Mars' at index-0 (unshift)
 * 
 * Add 'Venus' at index-4
 */
 let planets = ['plUtO', 'URANUS', 'A', 'B', 'Saturn', 'JupiTEr', 'LOL', 'Mercury', 'EaRtH']

    planets.unshift ('Mars');
    planets.splice(4,0,'Venus');

    console.log(planets)
    console.log(`\n\nplanets -> ${planets}`);
    console.log(`planets length -> ${planets.length}\n\n)`)
    
