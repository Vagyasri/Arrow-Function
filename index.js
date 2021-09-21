// document.addEventListener('click', function(){
//     return "Hello";
// });

// document.addEventListener('click', () => {
//     return "Hello";
// });

document.addEventListener('click', () => 'Hello');
// document.addEventListener('click', () => console.log('click'));

// Array Object
const bio = [
  {
    name: 'Lucky',
    age: 28,
  },
  {
    name: 'Patra',
    age: 28,
  },
];

// document.getElementById('display-books').innerHTML = bio.map(function (girl) {
//     return girl.name;
// });

document.getElementById('display-books').innerHTML = bio.map((girl) => girl.name);

// this
