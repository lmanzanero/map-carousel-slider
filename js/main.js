 // //Makes map areas responsive
// const imageResizer = imageMapResize();


//  MODAL

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const moreButton = document.querySelector('.modal .more');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

 
 


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
     pool: ["assets/Caves_Branch_Final/Pool/FINAL/Pool-1512122_CO_019.jpg", 
            "assets/Caves_Branch_Final/Pool/FINAL/Pool-cbjl_dh-1021.jpg"
          ],
    cheesehouse: ["assets/Caves_Branch_Final/Chese House/FINAL/CheeseCavesBranch2014_85.jpg", 
            "assets/Caves_Branch_Final/Chese House/FINAL/CheeseCheese Making Course 2013-2.jpg",
            "assets/Caves_Branch_Final/Chese House/FINAL/CheeseGuest participate in the cheese making.jpg",
            "assets/Caves_Branch_Final/Chese House/FINAL/CheeseGuests Enjoying our Cheese Tasting Tour.jpg",
            "assets/Caves_Branch_Final/Chese House/FINAL/CheeseIMG_0439.jpg",
            "assets/Caves_Branch_Final/Chese House/FINAL/CIMG2792 - Copy - Copy.JPG"
          ],
    botanicalgarden: ["assets/Caves_Branch_Final/Botanical/FINAL/Botanical-Botanical 1_ch.jpg", 
                     "assets/Caves_Branch_Final/Botanical/FINAL/Botanical-Botanical 2.jpg", 
                     "assets/Caves_Branch_Final/Botanical/FINAL/Botanical-P1160083.jpg"
                    ],
    reception: [
        "assets/Caves_Branch_Final/Welcome center/FINAL/ReceptionP1070317.jpg",
        "assets/Caves_Branch_Final/Welcome center/FINAL/ReceptionP1070337.jpg",
        "assets/Caves_Branch_Final/Welcome center/FINAL/Receptionunnamed-2.jpg"
    ],
    restaurant: [
         "assets/Caves_Branch_Final/Restaurant/FINAL/Caves Branch-1.jpg",
         "assets/Caves_Branch_Final/Restaurant/FINAL/Caves Branch-2.jpg",
         "assets/Caves_Branch_Final/Restaurant/FINAL/Caves Branch-3.jpg",
         "assets/Caves_Branch_Final/Restaurant/FINAL/Caves Branch-4.jpg"
    ],
     bungalow: [
         "assets/Caves_Branch_Final/Jungle Bungalow/FINAL/Cabana-Jungle Cabana SEscalante 2.jpg",
         "assets/Caves_Branch_Final/Jungle Bungalow/FINAL/Cabana-P1160138.jpg",
         "assets/Caves_Branch_Final/Jungle Bungalow/FINAL/Cabana-P1160143.jpg",
         "assets/Caves_Branch_Final/Jungle Bungalow/FINAL/Cabana-P1160147.jpg"
     ],
     cabanas: [
          "assets/Caves_Branch_Final/Jungle Cabana/FINAL/Caves Branch-1.jpg",
          "assets/Caves_Branch_Final/Jungle Cabana/FINAL/Caves Branch-2.jpg",
          "assets/Caves_Branch_Final/Jungle Cabana/FINAL/Caves Branch-3.jpg",
          "assets/Caves_Branch_Final/Jungle Cabana/FINAL/Caves Branch-4.jpg"
     ],
     canopyrooms: [
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-1.jpg",
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-2.jpg",
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-3.jpg",
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-4.jpg",
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-5.jpg",
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-6.jpg",
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-7.jpg",
         "assets/Caves_Branch_Final/Canopy Tree house/FINAL/Caves Branch-8.jpg"
     ],
     gazebo: [
      "assets/Caves_Branch_Final/Jungle Gazebo/Final/GazeboP1130113.jpg"
  ],
     riverview1: [
         "assets/Caves_Branch_Final/1 Bedroom river view treehouse/FINAL/Caves Branch-1.jpg",
         "assets/Caves_Branch_Final/1 Bedroom river view treehouse/FINAL/Caves Branch-2.jpg",
         "assets/Caves_Branch_Final/1 Bedroom river view treehouse/FINAL/Caves Branch-3.jpg"
     ], 
     riverview2: [
         "assets/Caves_Branch_Final/2 Bedroom River View house/Final/Caves Branch-1.jpg",
         "assets/Caves_Branch_Final/2 Bedroom River View house/Final/Caves Branch-2.jpg",
         "assets/Caves_Branch_Final/2 Bedroom River View house/Final/Caves Branch-3.jpg",
         "assets/Caves_Branch_Final/2 Bedroom River View house/Final/Caves Branch-4.jpg"
     ],
     suite: [
         "assets/Caves_Branch_Final/Jungle Suite/FINAL/caves_branch_jungle_lodge-belize-12.jpg",
         "assets/Caves_Branch_Final/Jungle Suite/FINAL/Suite-cbjl_dh-1027.jpg",
         "assets/Caves_Branch_Final/Jungle Suite/FINAL/Suite-Suite garden 2.jpg",
         "assets/Caves_Branch_Final/Jungle Suite/FINAL/Suite-Suite.jpg"
     ],
     sevenmilefloat: [
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-Copy of tubing.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-DSCN0984.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-DSCN0988.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0002.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004.jpg",

  ],
  river: [
    "assets/Caves_Branch_Final/Cave Tubing/FINAL/Tubing-Copy of tubing.jpg",
    "assets/Caves_Branch_Final/Cave Tubing/FINAL/Tubing-jad.caves.branch.belize.11.06.0004.jpg", 
],
    blackholedrop: [
      "assets/Caves_Branch_Final/Black hole drop/FINAL/Black Hole_ch-2.jpg",
      "assets/Caves_Branch_Final/Black hole drop/FINAL/Black-hole-1009171_CO_0047.jpg"
    ],
      rivercaveexpidition: [
        "assets/Caves_Branch_Final/River Cave Exp/FINAL/River-Cave1009171_CO_0138.jpg",
        "assets/Caves_Branch_Final/River Cave Exp/FINAL/River-Cave1009171_CO_0150.jpg",
        "assets/Caves_Branch_Final/River Cave Exp/FINAL/River-Cave1009171_CO_0156.jpg",
        "assets/Caves_Branch_Final/River Cave Exp/FINAL/River-Cave1009171_CO_0235.jpg",
        "assets/Caves_Branch_Final/River Cave Exp/FINAL/River-CaveCave tubing IMG_3259.jpg"
    ],
      waterfallcave: [
        "aassets/Caves_Branch_Final/Waterfall Cave/FINAL/1009171_CO_0358 (2).jpg",
        "assets/Caves_Branch_Final/Waterfall Cave/FINAL/Waterfall-Cave-_MG_8085.jpg"
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
 
 
 
