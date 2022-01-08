import {getElement} from './getElement.js';
import {hideLoading} from './toggleLoading.js';

export const displayDrink = ({drinks}/*data.drinks or data */)=>{
  const sectionCenter = getElement('.section-center');
  const taitle = getElement('.title');

  if(!drinks){
    hideLoading();
    taitle.textContent = `Sorry, can't found this type of drink `;
    sectionCenter.textContent = null;
    return ; 
  }

  const newDrinks = drinks.map((drink)=>{
       const {idDrink:id,strDrink:name,strDrinkThumb:image} = drink;
       return ` <a href="./drink.html">
                <article class="cocktail" data-id="${id}">
                    <img src="${image}" alt="cocktail">
                    <h3>${name}</h3>
                </article>
              </a>
             `
        }).join(" ");

        hideLoading()
        taitle.textContent= " ";
        sectionCenter.innerHTML = newDrinks;
        return sectionCenter;
    }