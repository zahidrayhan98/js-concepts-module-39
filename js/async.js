console.log(1)
console.log(2)
console.log(3)
setTimeout(()=>{
    console.log('welcome back')
},7000);
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

function doSomething(){
    console.log(4);
}
let num =0
const intervalId =setInterval(()=>{
    console.log(num++);
},1000)


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data=>console.log(data))
