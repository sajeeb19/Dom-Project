import {showLoading} from './toggleLoading.js';
export const fetchDrink = async (url)=>{
  showLoading();
  try{
    const result = await fetch(url);
    const data = await result.json();
    return data;
  }catch(error){
    console.log(error);
  }
}