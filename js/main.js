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

 areas.forEach(el => el.addEventListener('click', function(){
   openModal();
 }));


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