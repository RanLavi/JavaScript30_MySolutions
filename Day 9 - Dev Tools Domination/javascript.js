const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Regular');

// Interpolated
console.log('Not regular, Emoji of Mr Hankey, the %s', '💩');
let poo = '💩';
console.log(`And this is Mrs Hankey the ${poo}, shown using a variable`);

// Styled
console.log('%c Bigger text, with red background and yellow shdow', 'font-size:40px; background: red; text-shadow: 15px 10px 0 yellow');

// warning!
console.warn('There is a warning sign beside me! and I give a stack trace');

// Error :|
console.error('There is an error sign beside me! and I give a stack trace');

// Info
console.info('There is an info sign beside me!');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('style'), 'Nope, wrong. the p element does not have a style class'); // Displays message only when false

console.assert(1==1, 'True, will not show message');

// clearing
console.clear(); // Clears console

// Viewing DOM Elements
console.log(p); // Shows the actual element
console.dir(p); // Shows a dropwon of the element, such as properties and methods

console.clear(); // Clears console again

// Grouping together
dogs.forEach(dog => { // Going over the dogs
    console.groupCollapsed(`${dog.name}`); // Grouping by dog's name, below information will not show by default
    // console.group(`${dog.name}`); // Grouping by dog's name, showing the below information by default
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Marco'); // Shows the number of times we counted Marco, so now it is 1
console.count('Polo'); // Shows 1
console.count('Marco'); // Now will show 2
console.count('Marco'); // Shows 3 and so on
console.count('Polo'); // Shows 2 and so on
console.count('Marco');
console.count('Marco');
console.count('Marco');
console.count('Polo');
console.count('Marco');
console.count('Polo');

// timing
console.time('fetching data'); // Starts timer
fetch('https://api.github.com/users/webos') // Gets data from GitHub
    .then(data => data.json())
    .then(data => {
    console.timeEnd('fetching data'); // Ends timer, fetching data on the console will show the result
    console.log(data); // Shows the data from GitHub
    });

    console.table(dogs); // Takes an array of objects with the same properties and shows them in a table