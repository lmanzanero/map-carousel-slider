//Makes map areas responsive
imageMapResize();

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
    area1: ["http://www.thinkingparticle.com/sites/default/files/imagecache/node-gallery-display/Lush%20green%20khasi%20villages%20of%20Meghalaya.JPG", 
            "https://i.pinimg.com/originals/29/d6/14/29d61437bd887b7913f24d54cf4fb44c.jpg", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsKyuMvvsnipK2TfMmQYmmEve7HbzUoKl5IhyJW4nny5VrNqLNg",
            "https://i.pinimg.com/originals/29/d6/14/29d61437bd887b7913f24d54cf4fb44c.jpg", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsKyuMvvsnipK2TfMmQYmmEve7HbzUoKl5IhyJW4nny5VrNqLNg",
            "https://i.pinimg.com/originals/29/d6/14/29d61437bd887b7913f24d54cf4fb44c.jpg", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsKyuMvvsnipK2TfMmQYmmEve7HbzUoKl5IhyJW4nny5VrNqLNg"
          ],
    area2: ["img11", 
            "img22", 
            "img33"],
    area3: ["img13", 
            "img23", 
            "img33"],
   }
];
 

//adds a click listener for each area on map
 areas.forEach(area =>  area.addEventListener('click', function(){
        //gets array of images for the area that was clicked
        const currentArea = area.id;
        const currentAreaImgs = data[0][currentArea];

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

 
 
