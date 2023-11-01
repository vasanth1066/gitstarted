console.log('heooeoe')
let form=document.getElementById('formsid')
const bttn=document.getElementById('btnid')


bttn.addEventListener('click',buttonfun)

function buttonfun(e){
    e.preventDefault();
    
    let name=document.getElementById('textid').value;

    let phone=document.getElementById('phoneid').value;

    let desc=document.getElementById('descid').value;
    

    // localStorage.setItem('Name',name);
    // localStorage.setItem('phone',phone);
    // localStorage.setItem('desc',desc);


    // console.log('Displayed Name form Local-storgae:  '+localStorage.getItem('Name'))
    // console.log('Displayed Phone form Local-storgae:  '+localStorage.getItem('phone'))
    // console.log('Displayed Desc form Local-storgae:  '+localStorage.getItem('desc'))


    //-------storing data in object--------

    // let myobject ={
    //     name: name,
    //     phonenumber: phone,
    //     description:desc
    // };
    
    // // changing object to string to store in local storage
    // // because  we cannot store data as object in local storage though 
    // //we converting  it to an string

    // let myobject_serliaized=JSON.stringify(myobject);

    // localStorage.setItem ('myobject',myobject_serliaized);  // object are stored in local storaage 


    // //retreieving the object form localstorage
    // var myobject_deserliaized = JSON.parse(localStorage.getItem('myobject'));

   
    // console.log(myobject_deserliaized);
   
    // console.log(localStorage);


    // //-----    adds multiple userr in local storage---------



      let myobject ={
        name: name,
        phonenumber: phone,
        description:desc

    };


    let myobject_serliaized=JSON.stringify(myobject);

    localStorage.setItem (name,myobject_serliaized);  // object are stored in local storaage 


    //retreieving the object form localstorage
    var myobject_deserliaized = JSON.parse(localStorage.getItem(name));

    console.log(myobject_deserliaized);

    //dispalay in page

    // let display=document.createElement('label');
    // display.id='displayid';

    // let textnode=document.createTextNode('hello');
    // display.appendChild(textnode);

    // get ul tag to append to childnode
    let ultag=document.getElementById('ulid');
    let display=document.createElement('li')  //created li tag inside ul tag like <li></li>

    let textnode=document.createTextNode(name+"-"+phone+"-"+desc);//created textnode display content<li>name+"-"+phone+"-"+desc</li
    display.appendChild(textnode);      // append to text content into li tag

    let deletebtn=document.createElement('button');         // creating delete button <button></button>
    deletebtn.addEventListener('click',del);
   // deletebtn.onclick=del;

    deletebtn.id="deleteid";                                // add id to delete button <button id="deleteid"></button>
    let textnodedelete=document.createTextNode("Delete");   //create text delete 
    deletebtn.appendChild(textnodedelete);                  // delete value append to element <button id="deleteid">Delete</button>

    display.appendChild(deletebtn);                         //append delete button inside li tag.

    //console.log(deletebtn)    
    


    function del(){
       // console.log('delete button clicked')
        let dells=localStorage.removeItem(name);
       // console.log(localStorage.removeItem(name))
        let getchilditem=document.getElementById('ulid');
        getchilditem.removeChild(display)
        
        
    };

    ultag.appendChild(display); 
    
}