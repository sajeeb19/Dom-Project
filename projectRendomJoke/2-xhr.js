const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
url ='https://api.chucknorris.io/jokes/random' ;

btn.addEventListener('click',function(){
    getData(url)
    .then((result)=>{displayData(result)})
    .catch((error)=>{console.log(error);});
});
function getData(url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onreadystatechange= function(){
            if(xhr.readyState !== 4){ return ;}
    
            if(xhr.status === 200){
                resolve(xhr.responseText);
            }else{
                reject( {
                    status : xhr.status,
                    text : xhr.statusText
                }) ;
            }
        }
        xhr.send()
    });
   
}

function displayData(datas){
        const data = JSON.parse(datas);
        const {value : joke } = data;
        content.textContent = joke;
}