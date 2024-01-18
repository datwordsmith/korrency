$(document).ready(function() {
  // Function to animate the blue-sphere
  function animateSphere() {

      $('.blue-sphere').animate({
          marginTop: '100%' // Adjust the value as needed
      }, 2000); // Adjust the duration as needed

  }

  function animatePurpleSphere() {
    $('.purple-sphere')
      .animate({
        bottom: '80%'  // Adjust the starting position as needed
      }, 2000)
      .animate({
        top: '-20%'  // Adjust the ending position as needed
      }, 2000, function() {
        // This function is called when the second animation is complete
        // You can add additional actions here if needed
      });
  }

  animateSphere();
  animatePurpleSphere();


});