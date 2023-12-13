//lesson 3: Global Scope

//Create three global variables

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

//Creata a function called callMyNightSky

function callMyNightSky () {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}
// the function block is called outside the function
console.log(callMyNightSky());