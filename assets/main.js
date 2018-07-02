window.addEventListener("DOMContentLoaded", function() {

  let scroll = new SmoothScroll({
    updateURL: false,
    speed: 3000
  });

  function wrapChars(str, tmpl) {
    let wrapTxt = str.replace(/\w/g, tmpl || "<span class='letter'>$&</span>");
  	return wrapTxt;
  }
  
anime.timeline({direction: 'alternate'})
  .add({
    targets: '.ml5 .line',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: function(e, i, l) {
      var offset = -0.625 + 0.625*2*i;
      return offset + "em";
    }
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: 'book__author',
    easing: "easeOutExpo",
    translateY: -50,
    duration: 600,
    offset: '-=300',
    complete: function(anim) {
      setTimeout(function() {
        let anchor = document.querySelector('#intro');
          scroll.animateScroll(anchor, {
            speel: 3500,
            updateURL: false
          });
      }, );
    }
  });


	(function() {
			var lineMaker = new LineMaker({
				position: 'relative',
				lines: [
					{top: '15%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true},
					{top: '85%', left: 0, width: '100%', height: 2, color: '#ddd', hidden: true},
					{top: 0, left: '90%', width: 2, height: '100%', color: '#ddd', hidden: true},
					{top: 0, left: '10%', width: 2, height: '100%', color: '#ddd', hidden: true},
					{top: '15%', left: 0, width: '100%', height: 2, color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 0, direction: 'LeftRight' }},
					{top: '85%', left: 0, width: '100%', height: 2, color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 100, direction: 'RightLeft' }},
					{top: 0, left: '90%', width: 2, height: '100%', color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 200, direction: 'BottomTop' }},
					{top: 0, left: '10%', width: 2, height: '100%', color: '#000', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'TopBottom' }}
				]
			});
			
			setTimeout(function() {
				lineMaker.animateLineIn(4, {
					complete: function() { lineMaker.showLine(0); }
				});
				lineMaker.animateLineIn(5, {
					complete: function() { lineMaker.showLine(1); }
				});
				lineMaker.animateLineIn(6, {
					complete: function() { lineMaker.showLine(2); }
				});
				lineMaker.animateLineIn(7, {
					complete: function() { lineMaker.showLine(3); }
				});
			}, 100);

			setTimeout(function() {
				lineMaker.animateLineOut(4);
				lineMaker.animateLineOut(5);
				lineMaker.animateLineOut(6);
				lineMaker.animateLineOut(7);
			}, 2000);

			setTimeout(function() {
        lineMaker.createLine({top: '40vh', left: '21vw', width: '60vw', height: 100, color: '#fff', hidden: true, animation: { duration: 1000, easing: 'easeInOutExpo', delay: 300, direction: 'LeftRight' }});

        lineMaker.animateLineIn(8);

      }, 2000);

		})();
  
});