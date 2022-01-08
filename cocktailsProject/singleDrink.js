import {fetchDrink} from './sourse/fetchDrink.js';
import displaySingleDrink from './sourse/displaySingleDrink.js';


    const presentSingleDrink = async ()=>{
        
    const id= localStorage.getItem('drink');
    if(!id){
        window.location.replace('./index.html');
    }
    else{
        const brinks = await fetchDrink(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        displaySingleDrink(brinks);
   }
}



window.addEventListener('DOMContentLoaded',presentSingleDrink);