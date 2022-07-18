$(() => {
  /*TooTipl*/
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });

/*Popover*/
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

/*Carousel*/

  $('#carouselExampleControls').carousel({
    interval: 2000
});
}) 