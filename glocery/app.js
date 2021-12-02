// ****** select items **********

const form =document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery'); // input id
const submitBtn = document.querySelector('.submit-btn');
const container =document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn')

//edit opetion 

let editElement;
let editFlag = false;
let editID ;

//event listeners
form.addEventListener('submit',addItem);
clearBtn.addEventListener('click',clearAll);
window.addEventListener('DOMContentLoaded',setupItem);

//function
function addItem(e){
   e.preventDefault();
   let value = grocery.value;
   // console.log(value);
   const id = new Date().getTime().toString();
   // console.log(id);

   if(value  && !editFlag){
      //Additems 
   //    const element = document.createElement('article');
   //    let attribute = document.createAttribute('data-id');
   //    attribute.value = id;
      
   //    element.setAttributeNode(attribute);
   //    element.classList.add('grocery-item');
   //    element.innerHTML = `<p class="title">${value}</p>
   //                         <div class="btn-container">
   //                            <button type="button" class="edit-btn">
   //                               <i class="fas fa-edit"></i>
   //                            </button>
   //                            <button type="button" class="delete-btn">
   //                               <i class="fas fa-trash"></i>
   //                            </button>
   //                         </div>` ;

   // const dltBtn = element.querySelector('.delete-btn')
   // dltBtn.addEventListener("click", deleteItem);
   // const editBtn = element.querySelector('.edit-btn');      
   // editBtn.addEventListener('click',editItem);


   //    list.appendChild(element);
      createListItem(id,value);
      container.classList.add('show-container');


   displayAlert("item added to the list", "success");
         // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
   }
   else if(value && editFlag){
      editElement.innerHTML = value;

      displayAlert(" Edit  item","success");

      ediiLocalStroge(editID,value);
      setBackToDefault();

   }
   else{
      
      // alert.textContent = "please enter value","danger";
      // alert.classList.add('alert-danger');
      //*********using function
      displayAlert("please enter value","danger");
   }
}

//display alert 

function displayAlert(text,action){
   alert.textContent = text;
   alert.classList.add(`alert-${action}`);
//delete alert
   setTimeout(function(){
      alert.textContent ="";
      alert.classList.remove(`alert-${action}`);
   },1000);
}

function setBackToDefault(){
   grocery.value = "";
   editFlag = false;
   editID = "";
   submitBtn.textContent="Submit";
}

// clear item 
function clearAll(){
   let items  = document.querySelectorAll('.grocery-item');

   items.forEach(item =>{
      list.removeChild(item);
      
   });
   container.classList.remove('show-container');
   displayAlert("Empty list","danger");
   setBackToDefault();
   localStorage.removeItem("list");
}

//dltItem
function deleteItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   const id = element.dataset.id;
 
   list.removeChild(element);
 
   if (list.children.length === 0) {
     container.classList.remove("show-container");
   }
   displayAlert("item removed", "danger");
 
  
   // remove from local storage
   removeFromLocalStorage(id);

   setBackToDefault();
 }
//  editItem
function editItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   editElement= e.currentTarget.parentElement.previousElementSibling;
   // console.log(editElement);
   grocery.value =editElement.innerHTML;

   editFlag = true;
   editID = element.dataset.id
   submitBtn.textContent = 'edit';
}
//localStroge
//add
//remove
//edit

// localStorage.setItem("orange",JSON.stringify(["item","item2","item3"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// // console.log(oranges);
// localStorage.removeItem("orange");


function addToLocalStorage(id, value){
   const  goods = {id,value};
   // let items = localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")): [];
   let items = getItems();
   console.log(items);
    items.push(goods);
    localStorage.setItem("list",JSON.stringify(items));

} 

function removeFromLocalStorage(id){
   let items = getItems();

   items=items.filter(function(item){
      if(item.id != id){
         return item;
      }
   });
   localStorage.setItem("list",JSON.stringify(items));
}
function ediiLocalStroge(editID,value){
    let items = getItems();

    items = items.map(function(item){
         if(item.id === editID){
            item.value = value;
         }
         return item;
    });
    localStorage.setItem("list",JSON.stringify(items));
}

function getItems(){
   return localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")): [];
}


// setup item and item load from localstroge

function setupItem(){
   let items = getItems();

   if(items.length > 0){
      items.forEach(item=>{
         createListItem(item.id,item.value);
      });
      container.classList.add("show-container");
   }
}

function createListItem(id,value){
   const element = document.createElement('article');
   let attribute = document.createAttribute('data-id');
   attribute.value = id;
   
   element.setAttributeNode(attribute);
   element.classList.add('grocery-item');
   element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                           <button type="button" class="edit-btn">
                              <i class="fas fa-edit"></i>
                           </button>
                           <button type="button" class="delete-btn">
                              <i class="fas fa-trash"></i>
                           </button>
                        </div>` ;

const dltBtn = element.querySelector('.delete-btn')
dltBtn.addEventListener("click", deleteItem);
const editBtn = element.querySelector('.edit-btn');      
editBtn.addEventListener('click',editItem);


   list.appendChild(element);
}