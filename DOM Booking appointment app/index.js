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


    //-----    adds multiple userr in local storage---------
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


    let display=document.getElementById('lid');
    let textnode=document.createTextNode("["+name+"-"+phone+"-"+desc+"]");
    display.appendChild(textnode);

    


    



    console.log(display);
    


}


