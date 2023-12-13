//Lesson 6 Nested loops

const bobsFollowers = ['John','Michael','Peter','Dena'];

const tinasFollowers = ['John','Dena','Jenni'];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for(let j=0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i]===tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(mutualFollowers);