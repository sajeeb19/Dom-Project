const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('.container img');
url ='https://api.chucknorris.io/jokes/random' ;

btn.addEventListener('click',function(){
    fetch(url)
    .then((result)=>  result.json())
    .then((response)=>displayData( response))
    .catch((err)=>console.log(err));
});
function displayData(data){
        // const data = JSON.parse(datas);
        const {value : joke } = data;
        content.textContent = joke;
}