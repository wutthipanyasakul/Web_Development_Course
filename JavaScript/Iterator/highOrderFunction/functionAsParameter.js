//Lesson 3: Functions as Parameters

const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
    let checkA = val +2;
    let checkB = func(val);
    if (checkA === checkB){
      return func(val);
    }
    else{
      return 'inconsistent result';
    }
  
  }
  
  console.log(checkConsistentOutput(addTwo, 3));