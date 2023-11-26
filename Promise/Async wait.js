console.log('Person 1: Shows Ticket');
console.log('Person 2: Shows Ticket');

const movie =async ()=>{
    const promisewifebringingticket=new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve('Got a Ticket');
        },2000)
    })

    const getpopcorn = new Promise((resolve,reject)=>{
        resolve('popcorn')
    })

    const getbutter = new Promise((resolve,reject)=>{
        resolve('butter')
    })

    const getColddrinks = new Promise((resolve,reject)=>{
        resolve('ColdDrinks')
    })


    let ticket= await promisewifebringingticket;

    console.log('Wife : I have '+ticket);//String interpolation
    console.log('Hus : We should go in');
    console.log('Wife : no I am hungry');

    let popcorn=await getpopcorn;

    console.log(`Hus : I got some ${popcorn} `);//String interpolation
    console.log('Hus : We should go in');
    console.log('Wife : I need butter on my popcorn');

    let butter=await getbutter;

    console.log(`Hus : I got some  ${butter} `);//String interpolation
    console.log('Hus : Anything else');
    console.log('Wife : Lets go');
    console.log('Hus : okay');

    let drinks = await getColddrinks;

    console.log('Hus : And I got '+drinks)








    return ticket;
}
movie().then((msg)=>console.log('Person 3 : says '+msg))

console.log('Person 4: Shows Ticket');
console.log('Person 5: Shows Ticket');