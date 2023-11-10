console.log('hello ');

let ul=document.getElementById('ul-id');
let button=document.getElementById('buttonid');
button.addEventListener('click',adduser);
function adduser(e){
    e.preventDefault();
    // console.log(e)
    // console.log('button clicked')
    let expenseamount=document.getElementById('amountid').value;
    let description=document.getElementById('Descriptionid').value;
    let category=document.getElementById('selectid').value;

    let obj={
        amount:expenseamount,
        desc:description,
        c:category

    };

    localStorage.setItem(expenseamount,JSON.stringify(obj));

    //retreieving the object form localstorage
    var myobj_deserliaized = JSON.parse(localStorage.getItem(expenseamount));

    console.log(myobj_deserliaized);


    let element=document.createElement('li');
    element.id="li-id";
    //let text=document.createTextNode(expenseamount+' - '+category+' - '+description);
    let text=document.createTextNode(myobj_deserliaized.amount+' - '+myobj_deserliaized.c+' - '+myobj_deserliaized.desc);

    element.append(text);

    

    

    let deletebtn=document.createElement('button');
    deletebtn.classList="btn btn-danger"
    deletebtn.addEventListener('click',delfun);
    let deletetext=document.createTextNode('Delete Expense');
    deletebtn.append(deletetext);
    element.append(deletebtn);

    let editbtn=document.createElement('button');
    editbtn.classList="btn btn-outline-warning"
    editbtn.addEventListener('click',editfun);
    let edittext=document.createTextNode('Edit Expense');
    editbtn.append(edittext);
    element.append(editbtn);

    

    ul.appendChild(element);

    console.log(element);

    function delfun(e){
        localStorage.removeItem(expenseamount);
        let d=document.getElementById('ul-id');
        d.removeChild(element);
    };

    function editfun(e){
        localStorage.removeItem(expenseamount);

        let amounttext=document.getElementById('amountid')
        let desctext=document.getElementById('Descriptionid')
        let ctex=document.getElementById('selectid')
        
        amounttext.value=expenseamount;
        desctext.value=description;
        ctex.value=category;

        let ed=document.getElementById('ul-id');
        ed.removeChild(element);
       

        
    };

    
}
