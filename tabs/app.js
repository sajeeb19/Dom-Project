const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');


about.addEventListener('click',(e)=>{
     const id = e.target.dataset.id;

     if(id){
       btns.forEach(btn =>{
          btn.classList.remove('active');
       });
       e.target.classList.add('active');

       content.forEach(artical=>{
          artical.classList.remove('active');
       });

       const element = document.getElementById(id);

       console.log(element)
       element.classList.add('active');
     }
});