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

    let myobject ={
        name: name,
        phonenumber: phone,
        description:desc


    };
    
    // changing object to string to store in local storage
    // because  we cannot store data as object in local storage though 
    //we converting  it to an string

    let myobject_serliaized=JSON.stringify(myobject);

    localStorage.setItem ('myobject',myobject_serliaized);  // object are stored in local storaage 


    //retreieving the object form localstorage
    var myobject_deserliaized = JSON.parse(localStorage.getItem('myobject'));

   
    console.log(myobject_deserliaized);
   
    console.log(localStorage);


}


