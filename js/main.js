imageMapResize();
//Glider

new Glider(document.querySelector('.glider'), {
  slidesToShow: 5,
  slidesToScroll: 5,
  draggable: true,  
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

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
 const gliders = document.querySelector('.glider-track');



let data = ["area1", "img2", "img3"];
 

 areas.forEach(area =>  area.addEventListener('click', function(){
  
   console.log(currentImg);
   console.log(area.id);
   console.log(gliders);

   
   findAreaName(area.id);
 
  
   openModal();
 }));


 function findAreaName(areaName){
   console.log(areaName);
   data.forEach(area => {
     if(area == areaName){
       console.log("finding Images");
     }
   });
 }

  