document.addEventListener("DOMContentLoaded", function() {

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
      opacity: [1,0],
      easing: 'easeInOutQuad',
      duration: 7000
    })
    .add({
      targets: '.letter',
      opacity: [0,1],
      easing: 'easeInOutQuad',
      duration: 4250,
      offset: '-=6500',
      delay: function(el, i) {
        return 275 * (i+1)
      },
    })
    .add({
      targets: '.letter',
      opacity: [1,0],
      easing: 'easeInOutQuad',
      duration: 1125,
      delay: function(el, i) {
        return 90 * (i+1)
      }
       
    })
    // .add({
    //     targets: '.section__home',
    //     borderRadius: 0,
    //     borderWidth: 0,
    //     easing: 'easeInOutQuad',
    //     duration: 1000,
    //     // offset: '-=4000'
    //   })
      .add({
      targets: '.section__home__revealer',
      opacity: [0,1],
      easing: 'easeInOutQuad',
      duration: 4250,
      offset: '-=3200',
      complete: function(anim) {
        let anchor = document.querySelector('#intro');
        scroll.animateScroll(anchor, {
          speel: 3500,
          updateURL: false
        });
       }
    });
  
});