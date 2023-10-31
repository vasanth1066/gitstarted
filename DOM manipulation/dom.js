// -------------------------------DOM manipulation

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

//console.log(header);

// //--------------------------getElementsByClassName----------

// let items=document.getElementsByClassName('list-group-item');

// items[2].style.backgroundColor="green"

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold"
// }

// //console.log(items);

//--------------------------getElementsByTagName----------

// let li=document.getElementsByTagName('li');

//li[4].style.backgroundColor="yellow"

//console.log(li);

//-------------------------- querySelector ----------
//  let firstitem=document.querySelector('.list-group-item')

//  console.log(firstitem);

// let lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='red';
// console.log(lastItem);

// let seconditem=document.querySelector
// ('.list-group-item:nth-child(2)');

// seconditem.style.backgroundColor='green'

// //console.log(seconditem);


// let thirditem=document.querySelector
// ('.list-group-item:nth-child(3)');

// thirditem.style.display='none';

// //console.log(thirditem);

//-------------------------- querySelectorAll ----------

let secondItem=document.querySelectorAll('.list-group-item');
secondItem[1].style.color='green';

//console.log(secondItem);

let odditem=document.querySelectorAll
('li:nth-child(odd)');

console.log(odditem);
for(let i=0;i<odditem.length;i++){
    odditem[i].style.backgroundColor='green';
}
