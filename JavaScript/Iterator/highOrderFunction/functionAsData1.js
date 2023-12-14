//Lesson 2 Functions as Data
//Lesson 1 has no coding practice

// we set a long name identifier
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  

  // we make that long name shorter then invoke it

  const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  isTwoPlusTwo();

  //to check what the original function name is

  console.log(isTwoPlusTwo.name);