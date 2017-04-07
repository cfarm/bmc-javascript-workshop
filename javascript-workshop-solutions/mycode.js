// code will go in here

console.log('Hello World');
document.write('Here is a document.write statement');
document.getElementById('headline').innerHTML = '<em>Here is some new text!</em>';

document.getElementById('headline').innerHTML = 'Hello World!';

// comments

var numberOfKittens = 5;

console.log (numberOfKittens);

// puts number inside the #headline element
document.getElementById('headline').innerHTML = numberOfKittens;

var numberOfKittens = 5;
var numberOfPuppies = 4;
var numberOfAnimals = numberOfKittens + numberOfPuppies;
document.getElementById('headline').innerHTML = numberOfAnimals;

function sayMyCatsName(first, middle, last) {

    var myCatsName = first + middle + last;

    return 'My cat\'s name is ' + myCatsName;

}

var EllasWorm1 = 'Squiggles';

var name = sayMyCatsName( EllasWorm1, 'D ', 'Beest');

document.write(name);
alert('Important message!!!!!!!!!' + name);












// Store the following into variables: city or place, job title, home, and hobby.
// Output your fortune to the screen like so: "You will be a _job_ living in a _home_ in _city or place_. For fun you will _hobby_."

var city = 'Philly';
var job = 'web queen';
var home = 'yurt';
var hobby = 'sewing quilts';

document.write('You will be a ' + job + ' living in a ' + home + ' in ' + city + '. For fun you will ' + hobby);


var headline = document.getElementById('headline');

headline.innerHTML = 'hello!!!!! this is easier';



var header = document.querySelector('.header');
var footer = document.querySelector('footer.footer');
var headline = document.getElementById('headline');

console.log(headline);
console.log(header);
console.log(footer);



var newParagraph = document.createElement('p');
document.createElement('h1');
document.createElement('div');

var newContent = document.createTextNode('some content goes here!');


var newParagraphElement = newParagraph.appendChild(newContent);


headline.appendChild(newParagraphElement);

// // replaces:
// headline.innerHTML = newParagraphElement;



var pageNode = document.getElementsByTagName('body')[0];

var newImg = document.createElement('img');
newImg.src = 'https://cfarm.github.io/bmc-javascript-workshop/images/basket-of-kittens.jpg';
newImg.style.border = '1px solid black';
pageNode.appendChild(newImg);

var newParagraph = document.createElement('p');
var paragraphText = document.createTextNode('Squee!');
newParagraph.appendChild(paragraphText);
pageNode.appendChild(newParagraph);


var myTarget = document.getElementById('clickMe');

myTarget.onmouseover=function(){
     headline.innerHTML = 'Hi!';
}