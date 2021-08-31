
$(document).ready(function() {

/** Menu Burge */
const menuBurger = document.querySelector(".menu__burger");
const menuBody = document.querySelector(".navbar");

if(menuBurger){
  menuBurger.addEventListener("click" , function(e){
    menuBurger.classList.toggle("active");
    menuBody.classList.toggle("active");
    $('body').toggleClass('lock');
    })
}
/*****************************************/



    let currentFloor = 2
    const floorPath = $('.home__image path');
    const counterUp = $('.counter__up');
    const counterDown = $('.counter__down');
    const modal = $('.modal');
    const modalCloseButton = $('.modal__close-button');
    const viewFlats = $('.view-flats');
    const flatsPath = $('.modal__img path');
    const flatsLink = $('.flat__link');
  
    floorPath.on('mouseover', function() {
      floorPath.removeClass('current__floor');
      currentFloor = $(this).attr('data-floor');
      $('.counter').text(currentFloor);
    });
  
    function toggleModal() {
      modal.toggleClass('is-open');
    }
  
    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlats.on('click', toggleModal);
  
    function usCounterFloor(floor) {
      return floor.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
  
    function floorToggle(floor) {
      $('.counter').text(usCounterFloor(floor));
      floorPath.removeClass('current__floor');
      $(`[data-floor="${usCounterFloor(floor)}"]`).toggleClass('current__floor');
    };
  
    counterUp.on('click', function() {
      if (currentFloor < 18) {
        currentFloor++;
        floorToggle(currentFloor);
      }
    });
    counterDown.on('click', function() {
      if (currentFloor > 2) {
        currentFloor--;
        floorToggle(currentFloor);
      }
    });
  
    function deleteClass() {
      flatsPath.removeClass('current__flat');
      flatsLink.removeClass('current__flat');
    }
  
    flatsPath.on('mouseover', function() {
      deleteClass();
      $(`[data-flat-link="${$(this).attr('data-flat')}"]`).toggleClass('current__flat');
    });
  
    flatsLink.on('mouseover', function() {
      deleteClass();
      $(`[data-flat="${$(this).attr('data-flat-link')}"]`).toggleClass('current__flat');
    });
  });