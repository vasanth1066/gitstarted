console.log('heooeoe')
let form=document.getElementById('formsid')
const bttn=document.getElementById('btnid')


bttn.addEventListener('click',buttonfun)

function buttonfun(e){
    e.preventDefault();
    
    let name=document.getElementById('textid').value;

    let phone=document.getElementById('phoneid').value;

    let desc=document.getElementById('descid').value;
    

    localStorage.setItem('Name',name)
    localStorage.setItem('phone',phone)
    localStorage.setItem('desc',desc)


    console.log('Displayed Name form Local-storgae:  '+localStorage.getItem('Name',name))
    console.log('Displayed Phone form Local-storgae:  '+localStorage.getItem('phone',phone))
    console.log('Displayed Desc form Local-storgae:  '+localStorage.getItem('desc',desc))



}
//console.log(btn);

