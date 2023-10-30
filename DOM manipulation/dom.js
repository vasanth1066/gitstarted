//console.log(document);

//console.log(document.title);

let header=document.getElementById('header-title');

//console.log(header.textContent='hello')

//console.log(header.textContent='hello')

//----------getElementById-------------------------

let head=document.getElementById('main-header');
head.style.borderBottom  = ' solid 4px #000';

let additem=document.getElementById('titleid');

additem.style.fontWeight="bold"; 
additem.style.color='green'

//console.log(additem);

//--------------------------getElementsByClassName----------

let items=document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor="green"

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"
}

console.log(items[2]);

