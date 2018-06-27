window.addEventListener("DOMContentLoaded", function() {

(function() {
			var lineMaker = new LineMaker({
					parent: { element: document.body, position: 'append' },
					position: 'fixed',
					lines: [
						{top: 0, left: '0', width: '50vw', height: '100vh', color: '#fff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 0, direction: 'TopBottom' }},
						{top: 0, left: '50vw', width: '50vw', height: '100vh', color: '#fff', hidden: false, animation: { duration: 1000, easing: 'easeInOutCirc', delay: 150, direction: 'BottomTop' }}
					]
			});
			
			setTimeout(function() {
				lineMaker.animateLinesOut();
			}, 500);
		})();


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
    // .add({
    //  targets: '.section__home__lent',
    //  opacity: [1,0],
    //  easing: 'easeInOutQuad',
    //  duration: 7000,
    // })
    .add({
      targets: '.letter',
      opacity: [0,1],
      easing: 'easeInOutQuad',
      duration: 2250,
     // offset: '-=3500',
      delay: function(el, i) {
        return 150 * (i+1)
      }
    }).add({
      targets: '.letter',
      opacity: [1,0],
      easing: 'easeInOutQuad',
      duration: 1125,
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