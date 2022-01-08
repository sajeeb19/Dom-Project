import {getElement} from './utils/getElement.js';
import {getUser} from './utils/fetchUser.js';
import {displayUser} from './utils/displayUser.js'


export const URL = 'https://randomuser.me/api/';
const btn =getElement('.btn');


const showUser = async ()=>{
    //getUser
    const person = await getUser();
   
    //display User
    displayUser(person);
}

window.addEventListener('DOMContentLoaded',showUser);
btn.addEventListener('click',showUser);