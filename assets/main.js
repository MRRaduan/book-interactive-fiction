window.addEventListener("DOMContentLoaded", function() {

  let scroll = new SmoothScroll({
    updateURL: false,
    speed: 3000
  });

  function wrapChars(str, tmpl) {
    let wrapTxt = str.replace(/\w/g, tmpl || "<span class='letter'>$&</span>");
  	return wrapTxt;
  }
  


complete: function(anim) {
  setTimeout(function() {
    let anchor = document.querySelector('#intro');
      scroll.animateScroll(anchor, {
        speel: 3500,
        updateURL: false
      });
  }, );
}