$(document).ready(function(event) {
  function handleMenu(){
    $('.page-container').toggleClass('open');   
  }
  $('#toggle').on('click', function(e){
    e.preventDefault();
    handleMenu();
    return false;
  })
  $('body').on('click', function(e){
    if( $('.page-container.open').length && $(e.target).parents('.menu').length == 0 ){
        handleMenu();
    }
  })
})