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



const data = [
  {
    area1: ["img1", "img2", "img3"],
  },
  {
    area2: ["img1", "img2", "img3"],
  },
  {
    area3: ["img1", "img2", "img3"],
  }
];
 

 areas.forEach(area =>  area.addEventListener('click', function(){
   console.log(data);
   console.log(currentImg);
   console.log(area.id);
   console.log(gliders);

   const newGliders = data.map(glider =>   console.log(glider.area1));

   console.log(newGliders);
 
  
   openModal();
 }));


  