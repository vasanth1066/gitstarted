console.log('heooeoe')
let form=document.getElementById('formsid')
const bttn=document.getElementById('btnid')


bttn.addEventListener('click',buttonfun)

function buttonfun(e){
    e.preventDefault();
    
    let name=document.getElementById('textid').value;

    let phone=document.getElementById('phoneid').value;

    let email=document.getElementById('emailid').value;


      let myobject ={
        name: name,
        phonenumber: phone,
        mail:email

    };

    var getuserdataoncrudcrud;
    async function crud(){
        await axios.post("https://crudcrud.com/api/6af766f3596a406ebfd3b22b97f7f703/appoinmentdata",myobject)
        .then(response =>{
            console.log(response)
            showuserdetails(response.data)
        })
        .catch(err =>{console.log(err)})

        getuserdataoncrudcrud=await axios.get("https://crudcrud.com/api/6af766f3596a406ebfd3b22b97f7f703/appoinmentdata")
        .then(respons =>{
            console.log(respons)
        })
        .catch(err =>{console.log(err)})    

        console.log('getuserdataoncrudcrud',getuserdataoncrudcrud)
        
        
    }
    crud();

    


    //dispalay in page

    // let display=document.createElement('label');
    // display.id='displayid';

    // let textnode=document.createTextNode('hello');
    // display.appendChild(textnode);

    // get ul tag to append to childnode

    function showuserdetails(res){
        let ultag=document.getElementById('ulid');
    let display=document.createElement('li')  //created li tag inside ul tag like <li></li>

    let textnode=document.createTextNode(res.name+"-"+res.phonenumber+"-"+res.mail);//created textnode display content<li>name+"-"+phone+"-"+desc</li
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

    let editbutton=document.createElement('button');
    editbutton.onclick=edit;
    editbutton.id='editid';
    let textnodeedit=document.createTextNode('Edit');
    editbutton.appendChild(textnodeedit)

    function edit(){
       // console.log('edit button clicked')
        localStorage.removeItem(name);
        let nametext=document.getElementById('textid')
        let phonetext=document.getElementById('phoneid')
        let emailtext=document.getElementById('emailid')
        
        nametext.value=name;
        phonetext.value=phone;
        emailtext.value=email;

        let getchilditemedit=document.getElementById('ulid');
        getchilditemedit.removeChild(display)



    }

    display.appendChild(editbutton)


    ultag.appendChild(display); 
    
    }
    
}