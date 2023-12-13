//Lesson 4: Block Scope

//Define a function and log lightWaves's value whenever the function runs

function logVisibleLightWaves(){
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
  
  };
  // call the function outside the scope
  console.log(logVisibleLightWaves());
  //log the value of lightWaves into the console
  console.log(lightWaves); //ReferenceError