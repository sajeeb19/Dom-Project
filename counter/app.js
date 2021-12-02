let count = 0;

const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');

// console.log(btn);

btn.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click',function(event){
        
        const  classEs = event.currentTarget.classList;
        // const classEs = btn.classList;
        if(classEs.contains('increase')){
            count++;
        }
        else if(classEs.contains('decrease')){
            count--;
        }else{
            count = 0 ;
        }

        if(count > 0){
            value.style.color = 'green';
        }
        else if (count < 0 ){
            value.style.color = 'red';
        }else{
            value.style.color = 'black';
        }
        value.textContent = count;
    });
});
