const d=new Date();
console.log(d.toLocaleString())
console.log(d.getTime())
const posts=[
    {title:'post 1',},
    {title:'post 2'}
];

function getpost(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
        });
        console.log(posts)
        document.body.innerHTML=output;
    },1000);
}

 function createpost(post){
    console .log('After Creating post ')
  
    return new Promise((resolve,reject) =>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('ERROR');
        }
        updateLastuserActivityTime();
    })

    
    
 }
 function updateLastuserActivityTime(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve()
           
            const t= new Date();
            //  posts.push(d.getTime())
            console.log('USER last activity time'+ t.getTime())
        },1000)
    })
 }
 function deletepost(){
    console.log('after deleting post')
    return new Promise((resolve,reject)=>{
        if(posts.length>0){
            const ans=posts.pop();
            resolve(ans);
        }else{
            reject('ERROR');
        }
        
    })
 }

 createpost({title:'post 3'}).then(getpost).then(updateLastuserActivityTime).then(deletepost).then(getpost);
 //Promise.all([createpost({title:'post 3'}),getpost(),updateLastuserActivityTime(),getpost(),updateLastuserActivityTime(),deletepost()])