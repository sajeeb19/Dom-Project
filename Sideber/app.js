const togolButton = document.querySelector('.sidebar-toggle');
const sideber = document.querySelector('.sidebar');
const closeBurron = document.querySelector('.close-btn');

togolButton.addEventListener('click',function(){
    console.log(sideber.classList);
    // if(sideber.classList.contains('show-sidebar')){
    //     sideber.classList.remove('show-sidebar');
    // }else{
    //     sideber.classList.add('show-sidebar');
    // }
    sideber.classList.toggle('show-sidebar');
});
closeBurron.addEventListener('click',function(){
    sideber.classList.remove('show-sidebar');
});