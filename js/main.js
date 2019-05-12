 // //Makes map areas responsive
// const imageResizer = imageMapResize();


//  MODAL

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const moreButton = document.querySelector('.modal .more');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

 
 document.addEventListener('DOMContentLoaded', async function() {
      await document.querySelector('audio').play();
 });


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
    // carouselContainer.classList.add('animated', 'fadeInUp');
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
    console.log("closing modal");
    
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}

 const markers = document.querySelectorAll('.marker');
 const currentImg = document.querySelector('#currentImg');
 const carousels = document.querySelector('.carousel-track');



let data = [
   { 
     pool: ["assets/caves_branch_final_2/Pool/Pool-1512122_CO_019(1).jpg", 
            "assets/caves_branch_final_2/Pool/Pool-cbjl_dh-1021(1).jpg"
          ],
    cheesehouse: ["assets/caves_branch_final_2/Cheese House/Caves Branch-1.jpg", 
            "assets/caves_branch_final_2/Cheese House/CheeseCavesBranch2014_85(1).jpg"
          ],
    botanicalgarden: ["assets/caves_branch_final_2/Botanical/Botanical-Botanical 1_ch(1).jpg", 
                     "aassets/caves_branch_final_2/Botanical/Botanical-Botanical 2(1).jpg", 
                     "assets/caves_branch_final_2/Botanical/Botanical-P1160083(1).jpg"
                    ],
    reception: [
        "assets/caves_branch_final_2/Welcome Centre/ReceptionP1070317(1).jpg",
        "assets/caves_branch_final_2/Welcome Centre/ReceptionP1070337(1).jpg",
        "assets/caves_branch_final_2/Welcome Centre/Receptionunnamed-2(1).jpg"
    ],
    restaurant: [
         "assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-1.jpg",
         "assets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-2.jpg",
         "aassets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-3.jpg",
         "aassets/caves_branch_final_2/Restaurant/Restaurant-Cave Branch-4.jpg"
    ],
     bungalow: [
         "assets/caves_branch_final_2/Jungle Bungalow/Bungalow-Bungalow outside 1(1).jpg",
         "assets/caves_branch_final_2/Jungle Bungalow/Bungalow-caves_branch_jungle_lodge-belize-13.jpg",
         "aassets/caves_branch_final_2/Jungle Bungalow/Bungalow-cbjl_dh-1019(1).jpg" 
     ],
     cabanas: [
          "assets/caves_branch_final_2/Jungle Cabana/Cabana-Jungle Cabana SEscalante 2(1).jpg",
          "assets/caves_branch_final_2/Jungle Cabana/Cabana-P1160138(1).jpg",
          "assets/caves_branch_final_2/Jungle Cabana/Cabana-P1160143(1).jpg",
          "assets/caves_branch_final_2/Jungle Cabana/Cabana-P1160147(1).jpg"
     ],
     canopyrooms: [
         "assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-34485937_1985584891460523_8131194624082444288_n 2(1).jpg",
         "assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-Canopy Hot Tub(1).jpg",
         "assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-Canopy(1).jpg",
         "assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-cbjl400-1006(1).jpg",
         "assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-cbjl400-1007(1).jpg",
         "assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-cbjl400-1009(1).jpg",
         "assets/caves_branch_final_2/Canopy Tree house/Canopy-Tree-House-cbjl400-1051(1).jpg",
         "assets/caves_branch_final_2/Canopy Tree house/cbjl400_rework-1026.jpg"
     ],
     gazebo: [
      "assets/caves_branch_final_2/Jungle Gazebo/GazeboP1130113(1).jpg"
  ],
     riverview1: [
         "assets/caves_branch_final_1/1 Bedroom river view treehouse/Caves Branch-1.jpg",
         "assets/caves_branch_final_1/1 Bedroom river view treehouse/Caves Branch-2.jpg",
         "assets/caves_branch_final_1/1 Bedroom river view treehouse/Caves Branch-3.jpg"
     ], 
     riverview2: [
         "assets/caves_branch_final_2/2 Bedroom River view treehouse/River-Tree-House-2Bed-2 bedroom(1).jpg",
         "assets/caves_branch_final_2/2 Bedroom River view treehouse/River-Tree-House-2Bed-2-bed-riverview-2(1).jpg",
         "assets/caves_branch_final_2/2 Bedroom River view treehouse/River-Tree-House-2Bed-the test pic_(1).jpg", 
     ],
     suite: [
         "assets/caves_branch_final_2/Jungle Suite/caves_branch_jungle_lodge-belize-12.jpg",
         "assets/caves_branch_final_2/Jungle Suite/Suite-cbjl_dh-1027(1).jpg",
         "aassets/caves_branch_final_2/Jungle Suite/Suite-Suite garden 2(1).jpg",
         "assets/caves_branch_final_2/Jungle Suite/Suite-Suite(1).jpg"
     ],
     sevenmilefloat: [
      "assets/caves_branch_final_2/Cave Tubing/Tubing-Copy of tubing(1).jpg",
    "assets/caves_branch_final_2/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004(1).jpg"

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
        "assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0138-2.jpg",
        "assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0150-2.jpg",
        "assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0156-2.jpg",
        "assets/caves_branch_final_2/River cave Exp/River-Cave1009171_CO_0235.jpg",
        "assets/caves_branch_final_2/River cave Exp/River-CaveCave tubing IMG_3259-2.jpg"
    ],
      waterfallcave: [
        "assets/caves_branch_final_2/Waterfall Cave Exp/Waterfall-Cave-_MG_8085(1).jpg",
        "assets/caves_branch_final_2/Waterfall Cave Exp/waterfall-cave1009171_CO_0358 (2).jpg"
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
 
 
 
