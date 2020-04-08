$(document).ready(function() {

	const target = $(".main-row").offset().top;

	let fade = true;

  if($(window).width() >= 720) {
  	$(window).scroll(function () {	

      if($(window).scrollTop() >= target - 500 && fade) {
      	fade = false;
        $("#triggerModal").click();
        $(".main-row").animate({"opacity": 1}, 300);
        $(".plaque-6").animate({"opacity": 0}, 300);
        $(".jumbotron").animate({"opacity": 0}, 300);

      } else if($(window).scrollTop() < target - 500 && !fade) {
      	fade = true;
        $(".main-row").animate({"opacity": 0}, 300);
        $(".plaque-6").animate({"opacity": 1}, 300);
        $(".jumbotron").animate({"opacity": 1}, 300);
      }

  	});
  }

  else {
    $(window).scroll(function () {  

      if($(window).scrollTop() >= target - 400 && fade) {
        fade = false;
        $(".main-row").animate({"opacity": 1}, 300);
        $(".plaque-6").animate({"opacity": 0}, 300);
        $(".jumbotron").animate({"opacity": 0}, 300);

      } else if($(window).scrollTop() < target - 400 && !fade) {
        fade = true;
        $(".main-row").animate({"opacity": 0}, 300);
        $(".plaque-6").animate({"opacity": 1}, 300);
        $(".jumbotron").animate({"opacity": 1}, 300);
      }

    });
  }

});