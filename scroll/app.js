// date

const date = document.getElementById('date');

date.innerHTML =new Date().getFullYear();

// close links

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    // linksContainer.classList.toggle('show-links')

    // dainamic control hight with toggole
    const linksContainerHight = linksContainer.getBoundingClientRect().height;   

    const linksHight = links.getBoundingClientRect().height;
    
    if (linksContainerHight === 0){
        linksContainer.style.height = `${linksHight}px`;
    }else{
        linksContainer.style.height =0 ;
    } 
});

//fixed navber

const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});


// smoth scroll 

 const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);


      const navbarHeight = navbar.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      const fixedNav = navbar.classList.contains('fixed-nav');

      let position = element.offsetTop - navbarHeight ;
      // console.log(position);

      if(!fixedNav){
        position = position - navbarHeight;
      }
      if(navbarHeight > 82){
        position = position + containerHeight ;
      }
      window.scrollTo({
        left:0,
        top : position,
      });
      linksContainer.style.height = 0;
    });
});





