


function nice(resolve,reject){

  
    let value =false;
    if(!value){
        resolve(`nice to meet you`);
    }
    else{
        reject(`its a bed time to meet you`);
    }
}




const promis = new Promise(nice);

promis.then((ee)=>{
    console.log(ee);
})
.catch((en)=>{
    console.log(en);
});


//*********************** */
const imgContainre = document.querySelector(".image-container");
const  btn1 = document.querySelector('.btn');
const url = 'https://source.unsplash.com/random';
let img = new Image();
btn1.addEventListener('click',function(){
        let a =loadImage(url);
        a.then((ee)=>{imgContainre.appendChild(ee)})
        .catch((er)=>{console.log(er);});
});

function loadImage(url){
     const promise = new Promise((resolve,reject)=>{
         let img = new Image();
         console.log(img);
         img.src = url;
         img.addEventListener('load',()=>{
             resolve(img);
         });
         img.addEventListener('error',()=>{
             reject(new Error(`Image couldn't  load and the url : ${url} `));
         });
       
     });
     return promise;
 }