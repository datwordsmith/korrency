/* $(document).ready(function () {
    // Change navbar background color on scroll using jQuery
    function updateNavbarBackground() {
      var navbar = $("#navbar");
      var hero = $("#hero");
      var scrollTop = $(window).scrollTop();

      // Change background color when scrolling down
      if (scrollTop > navbar.height()) {
        navbar.css("background-color", "#A4C7FA");
      } else {
        // Make it transparent when scrolling to the top
        navbar.css("background-color", "rgba(255, 255, 255, 0.2)");
      }
    }

    // Initial background update
    updateNavbarBackground();

    // Update background on scroll
    $(document).scroll(updateNavbarBackground);

    // Update background when navbar-toggler is clicked
    $(".navbar-toggler").click(function () {
      var navbar = $("#navbar");
      var isNavbarCollapsed = navbar.hasClass("navbar-collapse");

      // Check if the navbar is collapsed after the click
      if (!isNavbarCollapsed) {
        navbar.css("background-color", "rgba(255, 255, 255, 1)");
      } else {
        // Update background based on scroll position
        updateNavbarBackground();
      }
    });
  });   */

    $(document).ready(function () {
    var navbar = $("#navbar");

    $(window).scroll(function () {
      if ($(window).scrollTop() >= 0.5) {
        navbar.addClass("fixed-top scrolled shadow-sm");
      } else {
        navbar.removeClass("fixed-top scrolled");
      }
    });
  });