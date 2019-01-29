/* Initiate Magnify Function
with the id of the image, and the strength of the magnifier glass:*/
magnify("main-map", 3);

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToScroll: 1,
        slidesToShow: 5.5, 
        dots: '#dots',
        itemWidth: "50px",
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      }); 
});
 

//toggle map 
const mainMap = document.querySelector('#main-map');
const magnifierContainer = document.querySelector('.mg-magnifier-container');
const toggleButton = document.querySelector('.toggle-btn');

//function that hides map and magnifier when toggle button is clicked
toggleButton.addEventListener('click', function(){
    mainMap.classList.toggle('map-hide');
    magnifierContainer.classList.toggle('map-hide');

    //toggles the text inside the toggle button that hides the map
    let x = toggleButton; 
        if (x.innerHTML === "Hide Map") {
            x.innerHTML = "Show Map"; 
        } else {
            x.innerHTML = "Hide Map";
        }
});