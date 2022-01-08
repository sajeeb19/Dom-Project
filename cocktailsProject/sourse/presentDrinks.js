import {fetchDrink} from './fetchDrink.js';
import {displayDrink} from './displayDrink.js';
import setDrink from './setDrink.js';

export const getPresentDrinks = async (url)=>{
  //fetch array
  const data = await fetchDrink(url);
  
  //display Drink
  const section = await  displayDrink(data);
   if(section){
     setDrink(section);
   }
}