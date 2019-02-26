 // //Makes map areas responsive
// const imageResizer = imageMapResize();


//  MODAL

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
    console.log("closing modal");
    
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

 const areas = document.querySelectorAll('area');
 const currentImg = document.querySelector('#currentImg');
 const carousels = document.querySelector('.carousel-track');



let data = [
   { 
     pool: ["assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Pool/1512122_CO_019.jpg", 
            "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Pool/P1012363.jpg", 
            "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Pool/Pool 4.jpg",
            "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Pool/Pool 5.jpg", 
            "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Pool/Saturday at Caves Branch.jpg"],
    cheesehouse: ["assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Cheese House/CavesBranch2014_85.jpg", 
            "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Cheese House/CIMG2792 - Copy - Copy.jpg",
            "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Cheese House/Wine and Cheese Tasting.jpg"],
    botanicalgarden: ["assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Botanical Garden/1512122_CO_114.jpg", 
                     "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Botanical Garden/1512122_CO_269.jpg", 
                     "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Botanical Garden/Caves Branch botanical garden 02.jpg"],
    reception: [
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Reception/caves branch.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Reception/CIMG2773.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Reception/P1070317.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Reception/P1070337.jpg"
    ],
    restaurant: [
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Restuarant/CavesBranch2014_110.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Restuarant/Restaurant25_InPixio.jpg" 
    ],
     bungalow: [
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Bungalow/Bungalow bed 7.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Bungalow/Bungalow bed 13.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Bungalow/cbjl_dh-1019.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Bungalow/cbjl_dh-1022.jpg"
     ],
     cabanas: [
          "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Cabanas/CVRoom9.jpg",
          "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Cabanas/CVRoom10.jpg",
          "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Cabanas/CVRoom27.jpg",
          "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Cabanas/CVRoom29.jpg",
          "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Cabanas/img_1789-img_1797g75.jpg",
          "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Cabanas/Jungle-Cabana.jpg"
     ],
     canopyrooms: [
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Canopy Rooms/balcony.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Canopy Rooms/bath3.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Canopy Rooms/bed2.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Canopy Rooms/lower balc.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Canopy Rooms/room 4.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Canopy Rooms/room3.jpg"
     ],
     riverview1: [
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 1 Bedroom/3.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 1 Bedroom/5.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 1 Bedroom/2014-06-05 12.26.40.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 1 Bedroom/Caves Branch 10.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 1 Bedroom/Caves Branch 16.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 1 Bedroom/img_1717-img_1725g75.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 1 Bedroom/Riverview 2 bed 1 floor bed 2.jpg"
     ], 
     riverview2: [
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/2-bed-riverview-2.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/2014-06-05 12.26.40-2.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/2014-06-05 12.26.40.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/cbjl_dh-1005.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/cbjl_dh-1012.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/cbjl_dh-1013.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/Image 4.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/Riverview 2 bed bath 1.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/River View 2 Bedroom/the test pic_.jpg"
     ],
     suite: [
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Suite/cbjl_dh-1002.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Suite/cbjl_dh-1027.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Suite/Jungle Suite.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Suite/Suite bath 1.jpg",
         "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Rooms/Suite/Suite garden 2.jpg"
     ],
     cavetour: [
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/7 mile cave tubing Edited/Cave tubing IMG_3247.jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/7 mile cave tubing Edited/Cave tubing IMG_3259.jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/7 mile cave tubing Edited/Cave tubing IMG_3392.jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/7 mile cave tubing Edited/Copy of tubing.jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/7 mile cave tubing Edited/Crystal Thomas-Getting dirty.jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/7 mile cave tubing Edited/Crystal Thomas-Riding on tractors.jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/7 mile cave tubing Edited/tubing 2.jpg"
      
  ],
    blackholedrop: [
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/black hole drop edited/black hole (1).jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/black hole drop edited/black hole (2).jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/black hole drop edited/black hole (3).jpg", 
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/black hole drop edited/black hole (5).jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/black hole drop edited/black hole (6).jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/black hole drop edited/black hole (7)(1).jpg",
      "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/black hole drop edited/Black_Hole_Drop-3.jpg",
    ],
      rivercaveexpidition: [
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/River cave expidition Edited/2014-08-14 09.05.01.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/River cave expidition Edited/988409_805800702816983_100442634958171604_n.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/River cave expidition Edited/1009171_CO_0124.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/River cave expidition Edited/1009171_CO_0128.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/River cave expidition Edited/1009171_CO_0135.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/River cave expidition Edited/1009171_CO_0137.jpg"
    ],
      waterfallcave: [
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/Waterfall cave Edited/waterfall cave 2(1).jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/Waterfall cave Edited/waterfall cave 3.jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/Waterfall cave Edited/waterfall cave epedition(1).jpg",
        "assets/MAP PROJECT FINAL PROCESSSED PHOTOS/Tours/Waterfall cave Edited/waterfall cave expedition.jpg"
      ]
   }
];
 

//adds a click listener for each area on map
 areas.forEach(area =>  area.addEventListener('click', function(){
        //gets array of images for the area that was clicked
        const currentArea = area.id;
        const currentAreaImgs = data[0][currentArea];

        console.log(area);

        //clear glider innerhtml before adding new elements everytime new areas are clicked
        carousels.innerHTML = "";
         
        //append all images for current area to glider dom element
        currentAreaImgs.map(img =>  {
          carousels.innerHTML += `
              <div class="img-container"><img class="image" src="${img}"/></div>
            `;
          }); 

        carouselFunctions();
        openModal();
        
 }));


 
//Carousel Functionalities
function carouselFunctions(){
  const imgContainer = document.querySelectorAll('.img-container img');  
  const rightArrow = document.querySelector('.carousel-next');
  const leftArrow = document.querySelector('.carousel-prev');
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
  leftArrow.addEventListener('click', leftArrowHandler);
  
  
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

 
 
 