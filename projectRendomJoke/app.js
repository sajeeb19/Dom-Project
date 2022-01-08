const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
url ='https://api.chucknorris.io/jokes/random' ;

btn.addEventListener('click', async function(){
     const data = await fetch(url);
     console.log(data);
     const response = await data.json();
     console.log(response);
     displayData(response);

    
});
function displayData(data){
        // const data = JSON.parse(datas);
        const {value : joke } = data;
        content.textContent = joke;
}