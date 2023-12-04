console.log('hello')

let additems=document.getElementById('addproductid');
additems.addEventListener('click',Additem)

let electonicsitems=document.getElementById('electronicid');
let fooditems=document.getElementById('foodid');
let skincareitems=document.getElementById('skincareid');

function Additem(e){
    e.preventDefault();

    let sellingprice=document.getElementById('sellingpriceid').value;
    let productname=document.getElementById('productnameid').value;
    let category=document.getElementById('categoryid').value;

    let myobj={
        price:sellingprice,
        pname:productname,
        cat:category
    }




    axios.post('https://crudcrud.com/api/687b86af4c064b01be1c73f3430a9a82/additems',myobj)
        .then(res =>{
            console.log(res.data)
           showdetails(res.data)
        })
        .catch(err =>console.log(err))

    

}

window.addEventListener("DOMContentLoaded",() =>{
    axios.get("https://crudcrud.com/api/687b86af4c064b01be1c73f3430a9a82/additems")
        .then(respons =>{
            // console.log(respons)
            for(var i=0;i<respons.data.length;i++){
                showdetails(respons.data[i])
            }
        })
        .catch(err =>{console.log(err)})   

})

function showdetails(res){

    if(res.cat=="Electronic"){
        let displayitems=document.createElement('li');
        let inputtext=document.createTextNode(res.price+'-'+res.pname+'-'+res.cat);

        displayitems.appendChild(inputtext);
        let deletebtn=document.createElement('button')
        deletebtn.addEventListener('click',deleteelectonicsitems)
        let deletetext=document.createTextNode('Delete Order')
        deletebtn.append(deletetext)
        displayitems.appendChild(deletebtn)
        electonicsitems.appendChild(displayitems);

        function deleteelectonicsitems(e){

            electonicsitems.removeChild(displayitems)

            let link=res._id
            axios.delete(`https://crudcrud.com/api/687b86af4c064b01be1c73f3430a9a82/additems/${link}`)
            .then(res =>{
                console.log(res)
            })
            .catch(err =>console.log(err))
    
        }
    }
    else if(res.cat=="Food"){
        let displayitems=document.createElement('li');
        let inputtext=document.createTextNode(res.price+'-'+res.pname+'-'+res.cat);

        displayitems.appendChild(inputtext);
        let deletebtn=document.createElement('button')
        deletebtn.addEventListener('click',deletefooditems)
        let deletetext=document.createTextNode('Delete Order')
        deletebtn.append(deletetext)
        displayitems.appendChild(deletebtn)
        fooditems.appendChild(displayitems);

        function deletefooditems(e){
            fooditems.removeChild(displayitems)

            let link=res._id
            axios.delete(`https://crudcrud.com/api/687b86af4c064b01be1c73f3430a9a82/additems/${link}`)
            .then(res =>{
                console.log(res)
            })
            .catch(err =>console.log(err))
        }

    }else if(res.cat=="Skincare"){
        let displayitems=document.createElement('li');
        let inputtext=document.createTextNode(res.price+'-'+res.pname+'-'+res.cat);

        displayitems.appendChild(inputtext);
        let deletebtn=document.createElement('button')
        deletebtn.addEventListener('click',deleteskincareitems)
        let deletetext=document.createTextNode('Delete Order')
        deletebtn.append(deletetext)
        displayitems.appendChild(deletebtn)
        skincareitems.appendChild(displayitems);

       
       
        function deleteskincareitems(e){
            skincareitems.removeChild(displayitems)

            let link=res._id
            axios.delete(`https://crudcrud.com/api/687b86af4c064b01be1c73f3430a9a82/additems/${link}`)
            .then(res =>{
                console.log(res)
            })
            .catch(err =>console.log(err))
        }
    }
    

}

