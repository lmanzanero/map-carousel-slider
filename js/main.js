//lazy load images
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})
// Get DOM Elements
const modal = document.querySelector('#my-modal');
const moreButton = document.querySelector('.modal .more');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

 
//  document.addEventListener('DOMContentLoaded', function() {
//    document.querySelector('audio').play();
//  });


const moreCarousels = document.querySelector('.more'); 
moreCarousels.addEventListener('click', function(){
  const carouselContainer = document.querySelector('.carousel-container');
  // Toggles more/less button in mobile devices for carousel track container

  if (carouselContainer.style.display === "none") {
    carouselContainer.style.display = "block";
    moreButton.innerHTML = "Less";
    carouselContainer.classList.add('animated', 'fadeInUp'); 
   } else {
    carouselContainer.style.display = "none"; 
    moreButton.innerHTML = "More";
  }
});

// Events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
  document.querySelector('audio').play();
}

// Close
function closeModal() { 
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  console.log("Clicked modal", e.target);
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

 const markers = document.querySelectorAll('.marker');
 const currentImg = document.querySelector('#currentImg');
 const carousels = document.querySelector('.carousel-track');



let data = [
   { 
     pool: ["assets/caves_branch_final_2/Pool/1512122_CO_019.jpg", 
            "assets/caves_branch_final_2/Pool/cbjl_dh-1021.jpg"
          ],
    cheesehouse: ["assets/caves_branch_final_2/Cheese House/Caves Branch-1.jpg", 
                 "assets/caves_branch_final_2/Cheese House/CheeseCavesBranch2014_85(1).jpg"
          ],
    botanicalgarden: [
                    "assets/caves_branch_final_2/Botanical/Botanical 1_ch.jpg", 
                    "assets/caves_branch_final_2/Botanical/Botanical 2.jpg", 
                     "aassets/caves_branch_final_2/Botanical/Botanical-P1160083.jpg"
                    ],
    reception: [
        "assets/caves_branch_final_2/Welcome Centre/P1070317.jpg",
        "assets/caves_branch_final_2/Welcome Centre/P1070337.jpg",
        "assets/caves_branch_final_2/Welcome Centre/Receptionunnamed-2.jpg"
    ],
    restaurant: [
        "assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-3.jpg",
        "assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-2.jpg",
        "assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-4.jpg",
        "assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-1.jpg"
    ],
    bungalow: [ 
         "assets/caves_branch_final_2/Jungle Bungalow/Bungalow-caves_branch_jungle_lodge-belize-13.jpg",
         "assets/caves_branch_final_2/Jungle Bungalow/cbjl_dh-1019 (1).jpg",
         "assets/caves_branch_final_2/Jungle Bungalow/cbjl_dh-1022 (1).jpg"
     ],
    cabanas: [ 
          "assets/caves_branch_final_2/Jungle Cabana/CavesBranch-Jungle-Cabana_228.jpg",
          "assets/caves_branch_final_2/Jungle Cabana/CavesBranch-Jungle-Cabana_231.jpg",
          "assets/caves_branch_final_2/Jungle Cabana/CavesBranch-Jungle-Cabana_234.jpg"
     ],
    canopyrooms: [ 
         "assets/caves_branch_final_2/Canopy Tree house/cbjl400-1007.jpg",
         "assets/caves_branch_final_2/Canopy Tree house/cbjl400-1009.jpg",  
         "assets/caves_branch_final_2/Canopy Tree house/cbjl400-1051.jpg",
         "assets/caves_branch_final_2/Canopy Tree house/cbjl400_rework-1026.jpg",
         "assets/caves_branch_final_2/Canopy Tree house/img_1906-img_1914g75.jpg"
     ],
     gazebo: [
      "assets/caves_branch_final_2/Jungle Gazebo/GazeboP1130113(1).jpg"
     ],
     riverview1: [
         "assets/caves_branch_final_2/1 Bedroom River view treehouse/caves_branch_jungle_lodge-belize-17.jpg"
     ], 
     riverview2: [ 
         "assets/caves_branch_final_2/2 Bedroom River view treehouse/cbjl_dh-1005 (1).jpg",
         "assets/caves_branch_final_2/2 Bedroom River view treehouse/cbjl_dh-1013 (1).jpg",
         "assets/caves_branch_final_2/2 Bedroom River view treehouse/Riverview 2 bed bath 1 (1).jpg"
     ],
     suite: [
         "assets/caves_branch_final_2/Jungle Suite/caves_branch_jungle_lodge-belize-13.jpg",
         "assets/caves_branch_final_2/Jungle Suite/cbjl_dh-1002 (1).jpg",
         "assets/caves_branch_final_2/Jungle Suite/cbjl_dh-1027 (1).jpg",
         "assets/caves_branch_final_2/Jungle Suite/Suite garden 2 (1).jpg"
     ],
     sevenmilefloat: [
      "assets/caves_branch_final_2/Cave Tubing/Tubing-Copy of tubing(1).jpg",
     "assets/caves_branch_final_2/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004.jpg"

    ],
    river: [
      "assets/caves_branch_final_2/Cave Tubing/Tubing-Copy of tubing(1).jpg",
      "assets/caves_branch_final_2/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004(1).jpg", 
    ],
      blackholedrop: [
        "assets/caves_branch_final_2/Black Hole drop/Black Hole_ch-2(1).jpg",
        "assets/caves_branch_final_2/Black Hole drop/Black-hole-1009171_CO_0047.jpg"
      ],
        rivercaveexpidition: [
          "assets/caves_branch_final_2/River cave Exp/1009171_CO_0138.jpg",
          "assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0150-2.jpg",
          "assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0156-2.jpg",
          "assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0235.jpg",
          "assets/caves_branch_final_2/River cave Exp/Cave tubing IMG_3259.jpg"
      ],
        waterfallcave: [
          "assets/caves_branch_final_2/Waterfall Cave Exp/Waterfall-Cave-_MG_8085(1).jpg",
          "assets/caves_branch_final_2/Waterfall Cave Exp/waterfall-cave1009171_CO_0358 (2).jpg",
          "assets/caves_branch_final_2/Waterfall Cave Exp/1009171_CO_0150.jpg",
          "assets/caves_branch_final_2/Waterfall Cave Exp/1009171_CO_0156.jpg",
          "assets/caves_branch_final_2/Waterfall Cave Exp/1009171_CO_0235.jpg"
        ]
      }
    ];
 

//adds a click listener for each area on map
 markers.forEach(area =>  area.addEventListener('click', function(){
        //gets array of images for the area that was clicked
        const currentArea = area.id;
        const currentAreaImgs = data[0][currentArea];

        console.log(area);

        //clear glider innerhtml before adding new elements everytime new areas are clicked
        carousels.innerHTML = "";
         
        //append all images for current area to glider dom element
        currentAreaImgs.map(img =>  {
          carousels.innerHTML += `
              <div class="img-container"><img class="image lazy" src="${img}"/></div>
            `;
          }); 

        carouselFunctions();
        openModal();
 }));

 
//Carousel Functionalities
function carouselFunctions(){
  const imgContainer = document.querySelectorAll('.img-container img');  
  const rightArrow = document.querySelector('.carousel-next');
  const rightArrow2 = document.querySelector('.carousel-next2');
  const leftArrow = document.querySelector('.carousel-prev');
  const leftArrow2 = document.querySelector('.carousel-prev2');
  let currentCarousel = 0;  


  //sets first carousel as the active carousel
  imgContainer[0].classList.add('current');

  getImgSrc(imgContainer[0].src);

   
   
//set click event listener to all carousel items
  imgContainer.forEach((img, i) => { 
     img.addEventListener('click', function(){ 
       //clearing current class from all carousels  
          clearCurrentClass();

          //adds class ".current" when current carousel is clicked
          img.classList.add('current');
          currentCarousel = i;
         
          //replace current carousel with currentImg 
          //  currentImg.src = imgContainer[currentCarousel].src;
          getImgSrc(imgContainer[currentCarousel].src);
     });  
  });

  //get current Image src
  function getImgSrc(src){ 
    currentImg.src = src;
  }

 //loops to remove class '.current' from every carousel in image container before adding it again when clicked
  function clearCurrentClass(){
    imgContainer.forEach(img=> { 
      img.classList.remove('current');
    });
  }


//carousel controls
  function rightArrowHandler(){
    console.log(rightArrow, "Right");
    //find current carousel and add class current to the following carosuel
    clearCurrentClass(); 
    if(currentCarousel < imgContainer.length - 1){
      currentCarousel++;
      imgContainer[currentCarousel].classList.add('current'); 
      getImgSrc(imgContainer[currentCarousel].src);
    } else {
      //reset carousel index
      currentCarousel = 0;
      imgContainer[currentCarousel].classList.add('current'); 
      getImgSrc(imgContainer[currentCarousel].src);
    }
      
  }

  function leftArrowHandler(){
   //find current carousel and add class current to the previous carosuel
   clearCurrentClass();

    if(currentCarousel > 0){
      currentCarousel--;
      imgContainer[currentCarousel].classList.add('current'); 
      getImgSrc(imgContainer[currentCarousel].src);
    } else {
      currentCarousel = imgContainer.length - 1;
      imgContainer[currentCarousel].classList.add('current'); 
      getImgSrc(imgContainer[currentCarousel].src);
    }
  }

  rightArrow.addEventListener('click', rightArrowHandler);
  rightArrow2.addEventListener('click', rightArrowHandler);
  leftArrow.addEventListener('click', leftArrowHandler);
  leftArrow2.addEventListener('click', leftArrowHandler);
  
  
    //Space bar must be outside the function for it to work, not sure why yet...must research.
   window.addEventListener("keydown", (event) => {
     //If space bar (number 32) is clicked and pause is 
      if(event.which == 37){
         //left arrow clicked 
           leftArrowHandler();
       } else if (event.which == 39){
         //right arrow clicked
         rightArrowHandler();
       }  else {
         console.log("Must click right or left only");
       }
   }); 

} 
 
 
 
