var item=document.getElementById('items');
var form=document.getElementById('addForm');

// deletion

item.addEventListener('click',deletion);

function deletion(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete')){
            var li=e.target.parentElement;
            item.removeChild(li);
        }
    }
    
}


//adding new item

form.addEventListener('submit',additem);

function additem(e){
    e.preventDefault();
    //console.log('addded');

     let newitem=document.getElementById('iteminput').value;   // value in forms tag
     var li=document.createElement('li');
     li.className='list-group-item';
     li.appendChild(document.createTextNode(newitem));

    // for adding editbutton
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right ';
    editBtn.appendChild(document.createTextNode('edit'));

    li.appendChild(editBtn);

    // for adding deletebutton
    var deleteBtn=document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deleteBtn);




    item.appendChild(li);

};
//console.log(item);