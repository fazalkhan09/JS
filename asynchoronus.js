// function one(callback){
//     setTimeout(()=>{
//         console.log("load")
//         callback();
//     },5000)
    
// }
// function two(callback){
//     setTimeout(() => {
//         console.log("sort")
//         callback();
//     }, 3000);
// }
// function three(callbcak){
//     setTimeout(() => {
//         console.log("print")
//         callbcak();
//     }, 2000);
// }
// one(()=>{
//     two(()=>{
//         three(()=>{
//             console.log("Done...")
//         })
//     })
// })

// function one(){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             console.log("load")
//             res();
//         }, 5000);
//     })
// }
// function two(){
//     return new Promise((res, rej)=>{
//         setTimeout(() => {
//             console.log("sort")
//             res();
//         }, 3000);
        
//     })
// }
// function three(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             console.log("print")
//             res();
//         }, 2000);
        
//     })

// }
// one().then(()=>{
//     two().then(()=>{
//         three().then(()=>{
//             console.log("done...")
//         })
//     })
// })


// async function run(){
//     await one();
//     await two();
//     await three();
    
// }
// run();
