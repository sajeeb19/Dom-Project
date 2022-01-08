import {hideLoading} from './toggleLoading.js';
import {getElement} from './getElement.js'

const displaySingleDrink = (data)=>{
    hideLoading()
    const drink = data.drinks[0];
    const {strDrinkThumb:image,strDrink:name,strInstructions:desc} = drink;
    const list =[drink.strIngredient1,drink.strIngredient2,drink.strIngredient3,drink.strIngredient4,drink.strIngredient5];

    const img = getElement('.drink-img');
    const drinkName = getElement('.drink-name');
    const drinkDesc = getElement('.drink-desc');
    const drinkIngredients = getElement('.drink-ingredients');

    img.src =image;
    document.title=name;
    drinkName.textContent = name;
    drinkDesc.textContent = desc;
    drinkIngredients.innerHTML = list.map((item)=>{
        if(!item) return;
        return `<li>${item}</li>`
    }).join(' ');
    console.log(drink,list);
}

export default displaySingleDrink;