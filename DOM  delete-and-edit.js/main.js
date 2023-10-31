var item=document.getElementById('items');
var form=document.getElementById('addForm');
let filtre=document.getElementById('filter');

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
     li.appendChild(document.createTextNode(newitem+' '));

     let newitemdescription=document.getElementById('description').value;   // description in forms tag
     var lidescription=document.createElement('li');
     lidescription.className='list-group-item';
    
     li.appendChild(document.createTextNode(newitemdescription));

    // for adding editbutton
    var editBtn=document.createElement('button');
    editBtn.className='btn btn-btn-sm float-right ';
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

// search item in list

filtre.addEventListener('keyup',filtree);

function filtree(e){
    let text=e.target.value;

    let items=item.getElementsByTagName('li');
    
    //------------------access the firstChild or chilNode[0] -------------------
    //chose based on index(they are 4 inedx childer like(item,desc,x-button,edit-button))

    //------------------access the chilnode[1] and -------------------
    //chose based on index(they are 4 childerlike(item,desc,x-button,edit-button))
    Array.from(items).forEach(function(item){
        let itemname=item.childNodes[0].textContent;


        let itemnamesecond=item.childNodes[1].textContent;

        if((itemname.indexOf(text)!=-1)||(itemnamesecond.indexOf(text)!=-1)){
            item.style.display='block';
       
            
        }else{
            item.style.display='none';
        }

    });

}

