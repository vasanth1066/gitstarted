let item=document.querySelector('#items');
console.log(item)

// parentNode
console.log(item.parentNode);

// parentElement
console.log(item.parentElement);

//childNode
console.log(item.childNodes);

//children
console.log(item.children);

//lastchild
console.log(item.lastChild);

//lastElementChild
console.log(item.lastElementChild);

//firstChild
console.log(item.firstChild);

//firstElementChild
console.log(item.firstElementChild);

//nextSibling
console.log(item.nextSibling);

//nextElementSibling
console.log(item.nextElementSibling);

//previousSibling
console.log(item.previousSibling);

//previousElementSibling
console.log(item.previousElementSibling);

//previousElementSibling.previousElementSibling----previous of prevoius
console.log(item.previousElementSibling.previousElementSibling);


//
console.log('--------------------');

let newele=document.createElement('DIV');

newele.id="newele";
newele.setAttribute('title','hello_div');

let textnode=document.createTextNode('HEllo world');
newele.appendChild(textnode);

console.log(newele)

let contianer=document.querySelector(' .container');
let h1=document.querySelector(' h1');

contianer.insertBefore(newele,h1);





