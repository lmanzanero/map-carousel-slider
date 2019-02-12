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
  let currentCarousel = 0;

  //sets first carousel as the active carousel
  imgContainer[0].classList.add('current');
   
//set click event listener to all carousel items
  imgContainer.forEach(img => { 
     img.addEventListener('click', function(){ 

      //loops to remove class '.current' from every carousel in image container before adding it again when clicked
          imgContainer.forEach(img=> {
            console.log(img);
            img.classList.remove('current');
          });
          //adds class ".current" when current carousel is clicked
          img.classList.add('current');
     });  
  });
}

 
 
