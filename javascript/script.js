const swiper = new Swiper('.sectionBestSellers__swiper', {
    // Optional parameters
    direction: 'horizontal',
    
    speed: 800,
    autoplay: {
      delay: 3000,
    },
    // If we need pagination

    pagination: {

      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
      320:{
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
     
      },
      800:{
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
      },
      1100:{
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 0,
       
      },
     
    },
      
  });
   /*style-for-customers.css navigation through Section-for-customers__content (css element)*/
   function SwitchSectionContent(index)
   {   const array_of_sectionContent = [];
       array_of_sectionContent[0] = document.getElementById("contentDelivery");
       array_of_sectionContent[1] = document.getElementById("contentPayment");
       array_of_sectionContent[2] = document.getElementById("contentReturn-of-goods");
       array_of_sectionContent[3] = document.getElementById("contentGuarantee");
       
       switch(index)
       {
         case 0:
           array_of_sectionContent[0].style.display = "block";
   
           array_of_sectionContent[1].style.display = "none";
           array_of_sectionContent[2].style.display = "none";
           array_of_sectionContent[3].style.display = "none";
           break;
         case 1:
           array_of_sectionContent[0].style.display = "none";
           array_of_sectionContent[1].style.display = "block";
           array_of_sectionContent[2].style.display = "none";
           array_of_sectionContent[3].style.display = "none";
           break;
         case 2: 
           array_of_sectionContent[0].style.display = "none";
           array_of_sectionContent[1].style.display = "none";
           array_of_sectionContent[2].style.display = "block";
           array_of_sectionContent[3].style.display = "none";
           break;
         case 3:
           array_of_sectionContent[0].style.display = "none";
           array_of_sectionContent[1].style.display = "none";
           array_of_sectionContent[2].style.display = "none";
           array_of_sectionContent[3].style.display = "block";
           break;
       }
   }
     