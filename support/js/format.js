var mobile = detectAppropriateScreenSize();

$(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 50);
});

$(window).bind('resizeEnd', function() {
  mobile = detectAppropriateScreenSize();
});

//boolean, mobile or desktop
function detectAppropriateScreenSize() {
   if($(window).width() <= 600) {
      $("#style").attr("href","support/css/style.m.css");
      return true;
   } else {
      $("#style").attr("href","support/css/style.css");
      return false;
   }
}