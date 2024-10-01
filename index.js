 

 //creating a navbar //
 const mobile_nav = document.querySelector(".mobile-navbar-btn");
 const headerEle = document.querySelector(".header");

 mobile_nav.addEventListener('click', ()=>{
   headerEle.classList.toggle('active');
 })
 // scroll to top bottom//
 const heroSection = document.querySelector(".section-hero");
 const footerElement = document.querySelector(".section-footer");
 const scrollElement = document.createElement("div");
 scrollElement.classList.add("scrollTop-style");

 scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

 footerElement.after(scrollElement);

 const scrollTop = () =>{
    heroSection.scrollIntoView({behavior:"smooth"})
 }
 scrollElement.addEventListener("click", scrollTop);

 // animate number//

 const counterNum = document.querySelectorAll(".counter-numbers");
 const speed  = 200;
 counterNum.forEach((curElem)=>{

   const updateNumber = () =>{
      const targetNumber = parseInt(curElem.dataset.number)
      const initialNum = parseInt(curElem.innerText);

        const incrementNumber = Math.trunc(targetNumber/ speed);

        if(initialNum < targetNumber){
         curElem.innerText =  `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 10);
        }
   };
    updateNumber();
 }) 



 
 