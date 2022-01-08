import {getPresentDrinks} from './sourse/presentDrinks.js';
import './sourse/search.js'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

const showDrink = () =>{
    getPresentDrinks(URL);
}

window.addEventListener('DOMContentLoaded',showDrink);