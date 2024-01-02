function one(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("data is loaded...")
            res();
        }, 4000);
    })
}
function two(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            console.log("Data is sorted...")
            res();
        }, 3000);
    })
}
function three(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("data is Printed ...")
            res();
        },2000);
    })
}
// one(()=>{
//     two(()=>{
//         three(()=>{
//             console.log("wargaya...")
//         })
//     })
// })


// one().then(()=>{
//     two().then(()=>{
//         three().then(()=>{
//             console.log(" kaar Osho")
//         })
//     })
// })

async function loaddata(){
    await one();
    await two();
    await three();
    console.log(" ka noor a e no waya...")
}
loaddata();