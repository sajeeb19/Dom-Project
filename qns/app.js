const question = document.querySelectorAll('.question');

question.forEach((questions)=>{
  const btn =questions.querySelector('.question-btn');
  // console.log(btn);
  btn.addEventListener('click',function(){
    question.forEach((item)=>{
      if(item !== questions){
        console.log(item);
        item.classList.remove('show-text');
      }
    });

    questions.classList.toggle('show-text');
  });
});