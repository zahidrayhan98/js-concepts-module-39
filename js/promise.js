

const getData= new Promise((resolve,reject)=>{
    const num =Math.random()*10
    console.log(num);
    if(num<5){

        resolve(56555555);
    }
    else{

        reject('no data found')
    }


})
getData.then(data=>console.log(data +4444))
   .catch(error=>console.error("error:",error))