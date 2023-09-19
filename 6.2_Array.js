let people = ["Greg", "Mary", "Devon", "James"];
people.shift();// removes the first element
people.pop();// removes last element
people.unshift('Matt'); // adding to the beginning of the array
people.push('Fady') // adding to the end of the array
 const slicePeople = people.slice(2);
const indexOfMary = people.indexOf('Mary');
const indexOfFoo = people.indexOf('Foo');//return -1 veacause foo is out of my array 
 people = ["Greg", "Mary", "Devon", "James"];
 people.splice(2,1,'Elizabeth','Artie');


 console.log(slicePeople);
console.log(people);
console.log(indexOfMary);
console.log(indexOfFoo);
console.log( people  );