window.addEventListener("DOMContentLoaded", function() {

  let scroll = new SmoothScroll({
    updateURL: false,
    speed: 3000
  });

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
      targets: '.section__home__revealer',
      easing: 'easeInOutQuad',
      translateY: '-100%',
      duration: 750,
     }).add({
      targets: '.section__home',
      easing: 'easeInOutQuad',
      translateY: ['50%','0%'],
      opacity: ['0','1'],
      duration: 700,
      offset: '-=200'
     })
    .add({
      targets: '.letter',
      opacity: [0,1],
      easing: 'easeInOutQuad',
      duration: 1250,
      offset: '-=1200',
      delay: function(el, i) {
        return 150 * (i+1)
      }
    }).add({
      targets: '.letter',
      opacity: [1,0],
      easing: 'easeInOutQuad',
      duration: 750,
      delay: function(el, i) {
        return 90 * (i+1)
      },
       complete: function(anim) {
         let anchor = document.querySelector('#intro');
        scroll.animateScroll(anchor, {
          speel: 3500,
          updateURL: false
        });
       }
    }).add({
      targets: '.letter',
      opacity: [0,1],
      easing: 'easeInOutQuad',
      duration: 5000,
      delay: function(el, i) {
        return 150 * (i+1)
      }
    });
  
});