import {getElement} from './getElement.js';

const img =getElement('.user-img');
const taitle =getElement('.user-title');
const value =getElement('.user-value');
const btns = [...document.querySelectorAll('.icon')];

export const displayUser = (person)=> {
    img.src = person.image;
    value.textContent = person.name;
    taitle.textContent = `My Name Is`;
    btns[1].classList.add('active');
    removeClassActive(btns);
    // btns.forEach((btn1)=>{btn1.classList.remove('active')});
    btns.forEach((btn)=>{
        const label = btn.dataset.label;
        console.log(label);
        btn.addEventListener('click',()=>{
            taitle.textContent = `My ${label} is`;
            value.textContent = person[label];
            // btns.forEach((btn1)=>{btn1.classList.remove('active')});
            removeClassActive(btns);
            btn.classList.add('active');
            
        });  
    }); 
}
function removeClassActive(item){
    item.forEach((btn1)=>{btn1.classList.remove('active')});
}