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

 const markers = document.querySelectorAll('.marker');
 const currentImg = document.querySelector('#currentImg');
 const carousels = document.querySelector('.carousel-track');



let data = [
   { 
     pool: ["assets/CB Caves Branch Map Final/Pool/Pool-1512122_CO_019.jpg", 
            "assets/CB Caves Branch Map Final/Pool/Pool-BJ Buzynski-Cb-refreshing-2.jpg", 
            "assets/CB Caves Branch Map Final/Pool/Pool-CavesBranchPool_b.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-CavesBranchPool_c.jpg", 
            "assets/CB Caves Branch Map Final/Pool/Pool-CavesBranchPool_e.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-CavesBranchPool_g.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-CB Signature Photo- Destination Mag.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-cbjl_dh-1021.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-IMG_1470.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-P1011930.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-P1011937.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-P1011943.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-P1011953.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-P1011957.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-P1012002.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-P1012363.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-Pool 4.jpg",
            "assets/CB Caves Branch Map Final/Pool/Pool-Pool 5.jpg"
          ],
    cheesehouse: ["assets/CB Caves Branch Map Final/Chese House/CheeseCaves Branch cheese house 01.jpg", 
            "assets/CB Caves Branch Map Final/Chese House/CheeseCaves Branch cheese house 17 - Copy - Copy-2.jpg",
            "assets/CB Caves Branch Map Final/Chese House/CheeseCavesBranch2014_85.jpg",
            "assets/CB Caves Branch Map Final/Chese House/CheeseCheese Making Course 2013-2.jpg",
            "assets/CB Caves Branch Map Final/Chese House/CheeseGuest participate in the cheese making.jpg",
            "assets/CB Caves Branch Map Final/Chese House/CheeseGuests Enjoying our Cheese Tasting Tour.jpg",
            "assets/CB Caves Branch Map Final/Chese House/CheeseIMG_0439.jpg",
            "assets/CB Caves Branch Map Final/Chese House/Cheesejancheese.jpg",
            "assets/CB Caves Branch Map Final/Chese House/CheeseWine and Cheese Tasting.jpg"
          ],
    botanicalgarden: ["assets/CB Caves Branch Map Final/Botanical/Botanical-1512122_CO_114.jpg", 
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-1512122_CO_269.jpg", 
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-Botanical 1_ch.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-Botanical 2.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150871.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150875.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150877.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150900.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150901.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150934.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150939.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150946.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150948.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150952.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150953.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1150961.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1160022.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1160030.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1160065.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1160068.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1160083.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Botanical-P1160089.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Pool-cbjl_dh-1021.jpg",
                     "assets/CB Caves Branch Map Final/Botanical/Pool-P1012363.jpg"
                    ],
    reception: [
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionP1070317.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionP1070337.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionRECEPTION SIGN-SEscalante.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/Receptionunnamed-2.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionWelcomeCenter_Vans2.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionWelcomeCenter_Vans3.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionWelcomeCenter_Vans4.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionWelcomeCenter_Vans20.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionWelcomeCenter_Vans29.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionWelcomeCenter_Vans31.jpg",
        "assets/CB Caves Branch Map Final/Welcome center/ReceptionWelcomeCenter_Vans35.jpg"
    ],
    restaurant: [
         "assets/CB Caves Branch Map Final/Restaurant/Dining-2014-06-21 10.03.57-2.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-10408782_823451854385201_7223078803485634361_n-2.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-CIMG3149-2.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-Dining Room_.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1130157.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150007.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150012.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150124.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150133.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150135.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150139.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150150.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150162.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150164.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-P1150183.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-Restaurant32.jpg",
         "assets/CB Caves Branch Map Final/Restaurant/Dining-Restaurant37.jpg"
    ],
     bungalow: [
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-Bungalow - Bathroom.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-Bungalow bed 11.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-Bungalow bed 13.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-Bungalow outside 1.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-cbjl_dh-1019.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-IMG_0463.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-IMG_5784.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-IMG_5889.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-Suite - Front Room.jpg",
         "assets/CB Caves Branch Map Final/Jungle Bungalow/Bungalow-Suite - View from Garden Shower.jpg"
     ],
     cabanas: [
          "assets/CB Caves Branch Map Final/Jungle Cabana/Cabana-CVRoom10.jpg",
          "assets/CB Caves Branch Map Final/Jungle Cabana/Cabana-CVRoom29.jpg",
          "assets/CB Caves Branch Map Final/Jungle Cabana/Cabana-Jungle Cabana SEscalante 2.jpg",
          "assets/CB Caves Branch Map Final/Jungle Cabana/Cabana-Jungle Cabana- SEscalante 3-2.jpg",
          "assets/CB Caves Branch Map Final/Jungle Cabana/Cabana-P1160138.jpg",
          "assets/CB Caves Branch Map Final/Jungle Cabana/Cabana-P1160143.jpg",
          "assets/CB Caves Branch Map Final/Jungle Cabana/Cabana-P1160147.jpg"
     ],
     canopyrooms: [
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-4.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-34485937_1985584891460523_8131194624082444288_n 2.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-Canopy Hot Tub.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-Canopy.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-cbjl400-1006.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-cbjl400-1007.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-cbjl400-1009.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-cbjl400-1049.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-cbjl400-1051.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-IMG_2095.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-IMG_2123.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-IMG_2553.jpg",
         "assets/CB Caves Branch Map Final/Canopy Tree house/Canopy-Tree-House-IMG_2670.jpg"
     ],
     gazebo: [
      "assets/CB Caves Branch Map Final/Jungle Gazebo/GazeboGazebo_ch.jpg",
      "assets/CB Caves Branch Map Final/Jungle Gazebo/GazeboP1130112.jpg",
      "assets/CB Caves Branch Map Final/Jungle Gazebo/GazeboP1130113.jpg",
      "assets/CB Caves Branch Map Final/Jungle Gazebo/GazeboP1130116.jpg"
  ],
     riverview1: [
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-3.jpg",
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-5.jpg",
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-2014-06-05 12.26.40.jpg",
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-Caves Branch 10.jpg",
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-Caves Branch 16.jpg",
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-IMG_0382_enfusedA.jpg",
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-img_1717-img_1725g75.jpg",
         "assets/CB Caves Branch Map Final/1 Bedroom river view treehouse/River-Tree-House-1Bed-Riverview 2 bed 1 floor bed 2.jpg"
     ], 
     riverview2: [
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-2 bedroom.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-2-bed-riverview-2.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-2014-06-05 12.26.40.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-cbjl_dh-1012.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-P1020400.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-P1030050.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-P1030066.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-P1030087.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-Riverview 2 bed bath 1.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-Riverview 2 bed lvingroom 2.jpg",
         "assets/CB Caves Branch Map Final/2 Bedroom River View house/River-Tree-House-2Bed-the test pic_.jpg"
     ],
     suite: [
         "assets/CB Caves Branch Map Final/Jungle Suite/Suite-cbjl_dh-1027.jpg",
         "assets/CB Caves Branch Map Final/Jungle Suite/Suite-img_1726-img_1734g75.jpg",
         "assets/CB Caves Branch Map Final/Jungle Suite/Suite-P1011834.jpg",
         "assets/CB Caves Branch Map Final/Jungle Suite/Suite-P1011867.jpg",
         "assets/CB Caves Branch Map Final/Jungle Suite/Suite-Suite bath 1.jpg",
         "assets/CB Caves Branch Map Final/Jungle Suite/Suite-Suite garden 2.jpg",
         "assets/CB Caves Branch Map Final/Jungle Suite/Suite-Suite.jpg"
     ],
     sevenmilefloat: [
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-Copy of tubing.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-DSCN0984.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-DSCN0988.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0002.jpg",
      "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004.jpg",

  ],
  river: [
    "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-Copy of tubing.jpg",
    "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-DSCN0984.jpg",
    "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-DSCN0988.jpg",
    "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0002.jpg",
    "assets/CB Caves Branch Map Final/Cave Tubing/Tubing-jad.caves.branch.belize.11.06.0004.jpg",
    
],
    blackholedrop: [
      "assets/CB Caves Branch Map Final/Black hole drop/black hole (1).jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/black hole (2).jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/black hole (3).jpg", 
      "assets/CB Caves Branch Map Final/Black hole drop/black hole (5).jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/black hole (6).jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/black hole (7)(1).jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black Hole_ch-2.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black Hole_ch.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black_Hole_Drop-3.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0030.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0047.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0048.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0050.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0051.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0055.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0056.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0071.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0072.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0073.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0074.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0102.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0104.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0116.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Black-hole-1009171_CO_0124.jpg",
      "assets/CB Caves Branch Map Final/Black hole drop/Botanical-1512122_CO_114.jpg"
    ],
      rivercaveexpidition: [
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave2014-08-14 09.05.01.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave988409_805800702816983_100442634958171604_n.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0124.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0128.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0134.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0135.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0137.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0138.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0148.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0150.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0156.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0176.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0235.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0276.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-Cave1009171_CO_0296.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-CaveCave tubing IMG_3247.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-CaveCave tubing IMG_3259.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-CaveCave tubing IMG_3334.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-CaveCave tubing IMG_3365.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-CaveCave tubing IMG_3418.jpg",
        "assets/CB Caves Branch Map Final/River Cave Exp/River-CaveRiver Cave Tubing_.jpg"
    ],
      waterfallcave: [
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-_MG_8040.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-_MG_8070.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-_MG_8085.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-_MG_8086.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-_MG_8114.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-_MG_8138.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-_MG_8142.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-waterfall cave 2(1).jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-waterfall cave 3.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-waterfall cave epedition(1).jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-waterfall cave expedition.jpg",
        "assets/CB Caves Branch Map Final/Waterfall Cave/Waterfall-Cave-Waterfall_.jpg"
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

//  areas.forEach(area => {
//   area.addEventListener('mouseover', function(){
    
//     area.innerHTML += ``;
//   });
//  });


 
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


// Toggling Styles
function hoverMakers() {
  const markers = document.querySelectorAll('.marker');

  markers.forEach(marker => {
    console.log(marker);
    marker.addEventListener('mouseover', function(){
      marker.style.textShadow = "2px 2px 1px black";
      marker.style.transition = "0.5s";
    });
    marker.addEventListener('mouseout', function(){
      marker.style.textShadow = "1px 1px 1px black";
      marker.style.transition = "0.5s";
    });
  })
  
}

hoverMakers();
 
 
 