import {getPresentDrinks} from './presentDrinks.js';
import { getElement } from './getElement.js';

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const from = getElement('.search-form');
const input = getElement('[name="drink"]');

from.addEventListener('keyup',function(e){
e.preventDefault();
const value = input.value;
if(!value) {return ;}
// const url1 = `${baseUrl}${value}`;
// console.log(url1);
getPresentDrinks(`${baseUrl}${value}`)
});