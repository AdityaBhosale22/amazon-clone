function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Welcome to the hotel California, do the registration at the desk");
        }, 2000);
    })
}
function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Registration done, proceed to your room");
        }, 2500);
    })
}
function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You have reached your room, please relax and enjoy your stay");
        }, 3000);
    })
}
function promise4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("If you want to order the food or anything, just call the reception");
        }, 3000);
    })
}
function promise5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("food order not given, it will reach your room in 30 minutes");
        }, 3000);
    })
}
function promise6() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Enjoy your food and have a great stay!");
        }, 3000);
    })
}

// promise1().then((res)=>{
//     console.log(res);
//     return promise2();
// }).then((res)=>{
//     console.log(res);
//     return promise3();
// }).then((res)=>{
//     console.log(res);
//     return promise4();
// }).then((res)=>{
//     console.log(res);
//     return promise5();
// }).then((res)=>{
//     console.log(res);
//     return promise6();
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error: ", err);
// });

// async function hotelCalifornia(){
//     try{
//         const res1 =  await promise1();
//         console.log(res1);
//         const res2 =  await promise2();
//         console.log(res2);
//         const res3 =  await promise3();
//         console.log(res3);
//         const res4 =  await promise4();
//         console.log(res4);
//         const res5 =  await promise5();
//         console.log(res5);
//         const res6 =  await promise6();
//         console.log(res6);
//     } catch(err){
//         console.log("Error: ", err);
//     }
// }

// hotelCalifornia();

//this is not an industry standard
// fetch("https://picsum.photos/200")
//     .then((res) => {
//         console.log("Response: ", res);
//         return res.blob();
//     })
//     .then((data) => {
//         document.body.innerHTML += `<img src="${URL.createObjectURL(data)}" alt="Random Image"/>`;
//     })
//     .catch((err) => {
//         console.log("Error: ", err);
//     });

const BASE_URL = "https://picsum.photos/200";

async function fetchImage(){
    try {
        console.log("Fetch attempt started");
        const res = await fetch(`${BASE_URL}`);
        if(!res.ok){
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.blob();
        document.body.innerHTML += `<img src="${URL.createObjectURL(data)}" alt="Random Image"/>`;
    } catch (error) {
        console.log("Error: ", error);
    } finally{
        console.log("Fetch attempt finished");
    }
}
fetchImage();