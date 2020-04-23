

export const scrollToAnchor = (srch) => {
  var TweenScrollTop = {scrollTop:0};
  var target = $(srch);

  if(target.length){
    var targetTop = target.offset().top - parseInt($('body').css('margin-top'),10);
    TweenScrollTop.scrollTop = $(window).scrollTop();
    TweenMax.to(TweenScrollTop, 2, {
      scrollTop:targetTop,
      ease:Expo.easeOut,
      onUpdate:function(){
        $('html,body').scrollTop(TweenScrollTop.scrollTop);
      }
    });
  }

  $(document).on('click', 'a[href^="#"]', function(evt){
    scrollToAnchor(this.hash);
  });
}



export const fadeInEffect = () => {
  var controller = new ScrollMagic.Controller();

  function fadeUp(el) {
    var secondaryDuration = 1;
    var $secondaryEl = $(el).find('.fade-block');
    var secondaryElStagger = 0.25;

    return(
      (new TimelineMax()).staggerFromTo($secondaryEl, secondaryDuration,
        {opacity: 0, y: 75},
        {opacity: 1, y: 0},
      secondaryElStagger)
    );
  }

  function buildSceneFor(el) {
    (new ScrollMagic.Scene({
      triggerElement: el,
      offset: -100
    }))
    .setTween(fadeUp(el))
    .addTo(controller);
  }

  
    $('.trigger-fade-block').each(function(){
      buildSceneFor(this);
    });
  
}