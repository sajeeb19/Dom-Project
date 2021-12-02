const modelBtn = document.querySelector('.modal-btn');
const modelOverlay = document.querySelector('.modal-overlay');
const modelClose = document.querySelector('.close-btn');

modelBtn.addEventListener('click',function(){
    modelOverlay.classList.add('open-modal');
});
modelClose.addEventListener('click',function(){
    modelOverlay.classList.remove('open-modal');
});