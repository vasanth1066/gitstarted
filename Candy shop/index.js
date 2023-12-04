console.log('heelo')

let additembtn=document.getElementById('additemid');
additembtn.addEventListener('click',additems);

let ultag=document.getElementById('ulid');




function additems(e){
    e.preventDefault();

    let candyname=document.getElementById('candynameid').value;
    let decsription=document.getElementById('decsriptionid').value;
    let price=document.getElementById('priceid').value;
    let quantity=document.getElementById('quantityid').value;

    
    let myobj={
        cname: candyname,
        cdesc: decsription,
        cprice: price,
        cqu: quantity
    };

    axios.post('https://crudcrud.com/api/f1dd83a14fea4ca9bceb3ee193eefcf4/adddetails',myobj)
        .then(res=>{
            showdetails(res.data)
            console.log(res)
        })
        .catch(e => console.log(e))


    function showdetails(res)   {
        
    let displayitems=document.createElement('li')
    let textnode=document.createTextNode(res.cname+' '+res.cdesc+' '+res.cprice+' '+res.cqu)
    displayitems.appendChild(textnode)

    let buyone=document.createElement('button');
    buyone.id='buyoneid';
    buyone.addEventListener('click',BuyOne)
    let buyonetext=document.createTextNode('BuyOne')
    buyone.appendChild(buyonetext)
    displayitems.appendChild((buyone))


    let buytwo=document.createElement('button');
    buytwo.id='buytwoid';
    buytwo.addEventListener('click',BuyTwo)
    let buytwotext=document.createTextNode('BuyTwo')
    buytwo.append(buytwotext)
    displayitems.appendChild((buytwo))
    

    let buythree=document.createElement('button');
    buythree.id='buythreeid';
    buythree.addEventListener('click',BuyThree)
    let buythreetext=document.createTextNode('BuyThree')
    buythree.append(buythreetext)
    displayitems.appendChild((buythree))

    
    ultag.appendChild(displayitems)
    console.log(displayitems)
    

    function BuyOne(e){
        let value=res._id;
        axios.delete(`https://crudcrud.com/api/f1dd83a14fea4ca9bceb3ee193eefcf4/adddetails/${value}`)
        .then(res=>{
            console.log(res)
        })
        .catch(e => console.log(e))

        ultag.removeChild(displayitems)

        axios.post(`https://crudcrud.com/api/f1dd83a14fea4ca9bceb3ee193eefcf4/adddetails`,{
            cname: candyname,
            cdesc: decsription,
            cprice: price,
            cqu: res.cqu-1
        })
        .then(res=>{
            showdetails(res.data)
            console.log(res)
        })
        .catch(e => console.log(e))

        console.log('button clicked')
        res.cqu=res.cqu-1;
        console.log(res.cqu)
    }
    
    function BuyTwo(e){
       let value=res._id;
        axios.delete(`https://crudcrud.com/api/f1dd83a14fea4ca9bceb3ee193eefcf4/adddetails/${value}`)
        .then(res=>{
            console.log(res)
        })
        .catch(e => console.log(e))

      
        ultag.removeChild(displayitems)

        axios.post(`https://crudcrud.com/api/f1dd83a14fea4ca9bceb3ee193eefcf4/adddetails`,{
            cname: candyname,
            cdesc: decsription,
            cprice: price,
            cqu: res.cqu-2
        })
        .then(res=>{
            showdetails(res.data)
            console.log(res)
        })
        .catch(e => console.log(e))
        
        console.log('button clicked')
        res.cqu=res.cqu-2;
        console.log(res.cqu)
    }
    
    function BuyThree(e){
        let value=res._id;
        axios.delete(`https://crudcrud.com/api/f1dd83a14fea4ca9bceb3ee193eefcf4/adddetails/${value}`)
        .then(res=>{
            console.log(res)
        })
        .catch(e => console.log(e))

        let getchilditem=document.getElementById('ulid');
        getchilditem.removeChild(displayitems)

        axios.post(`https://crudcrud.com/api/f1dd83a14fea4ca9bceb3ee193eefcf4/adddetails`,{
            cname: candyname,
            cdesc: decsription,
            cprice: price,
            cqu: res.cqu-3
        })
        .then(res=>{
            showdetails(res.data)
            console.log(res)
        })
        .catch(e => console.log(e))
        
        console.log('button clicked')
        res.cqu=res.cqu-3;
        console.log(res.cqu)
    }

    }
}


