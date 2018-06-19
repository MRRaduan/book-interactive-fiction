window.addEventListener("DOMContentLoaded", function() {

  function wrapChars(str, tmpl) {
    let wrapTxt = str.replace(/\w/g, tmpl || "<span class='letter'>$&</span>");
  	return wrapTxt;
  }
  
  titleTag = document.querySelector('.book__title');
  titleTag.innerHTML = wrapChars(titleTag.innerHTML);

  authorTag = document.querySelector('.book__author');
  authorTag.innerHTML = wrapChars(authorTag.innerHTML);
  
  anime.timeline()
    .add({
      targets: '.letter',
      opacity: [0,1],
      easing: 'easeInOutQuad',
      duration: 2250,
      delay: function(el, i) {
        return 150 * (i+1)
      }
    });
  
});