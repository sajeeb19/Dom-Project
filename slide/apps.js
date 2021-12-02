const sliders = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

let counter = 0;
sliders.forEach(function(slide,index){
  slide.style.left = `${index * 100}%`
});

nextBtn.addEventListener('click',function(){
    counter++;
    carousel();
});

prevBtn.addEventListener('click',function(){
  counter--;
  carousel();
});

function carousel(){
  // if(counter === sliders.length){
  //   counter=0;
  // }
  // if(counter < 0 ){
  //   counter=sliders.length -1 ;
  // }
  if (counter < sliders.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }



  sliders.forEach(function(slide){
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
prevBtn.style.display = "none";