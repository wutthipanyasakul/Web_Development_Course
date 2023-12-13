//Lesson 10 Arrays and Function
//Change to the array was maintained outside of the function

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(changeArr(concept));


function removeElement (newArr) {
  newArr.pop();
};

removeElement(concept);

console.log(concept);

