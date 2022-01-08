const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
url ='https://api.chucknorris.io/jokes/random' ;

btn.addEventListener('click',function(){
    getData(url)
});


function getData(url){
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.onreadystatechange= function(){
        if(xhr.readyState !== 4){ return ;}

        if(xhr.status === 200){
            // img.classList.add('')
            const data = JSON.parse(xhr.responseText);
            const {value : joke } = data;
           
            content.textContent = joke;
            
        }else{
            console.log(
                {
                    status : xhr.status,
                    text : xhr.statusText
                }
            );
        }
    }
    xhr.send()
}