jQuery('a').filter(function(){
  return this.hostname && this.hostname !== location.hostname;
}).addClass('external');
if(jQuery('html').hasClass("touch")){
  jQuery('a.external').click(function(e){
    e.preventDefault();
    var check = confirm("By clicking this link, you will be navigating away from this site.");
    if(check == true){
      var win = window.open(this.href, '_blank');
      win.focus();
    }
  });
}

jQuery('a.external').hover(function(){
  jQuery(this).addClass("leaving-popup");
},
function(){
  jQuery(this).removeClass("leaving-popup");
});

jQuery(window).scroll(function(event) {
  var width = jQuery(window).width();
  var height = jQuery(document).height();
    jQuery('a.external').each(function(index){
      var offset = jQuery(this).offset();
      if(offset.top > (7 / 8) * height){
        jQuery(this).addClass("bottomhalf");
      }
      else{
        jQuery(this).removeClass("bottomhalf");
      }
      if(offset.left < (1 / 2) * width){
        jQuery(this).addClass("leftside");
      }
      else{
        jQuery(this).removeClass("leftside");
      }
    });
});
