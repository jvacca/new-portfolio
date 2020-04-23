import '../scss/page.scss';
import apiData from '../../data/data.json';
import { scrollToAnchor } from './library';
import { fadeInEffect } from './library';

$(document).ready(function(){
  console.log("Initializing");

  $('#splash').height(window.innerHeight);
  fadeInEffect();

  const controller = new ScrollMagic.Controller();

  let scene = new ScrollMagic.Scene({
    triggerElement: '#splash',
    triggerHook: "onEnter"
  })
  .setTween(() => {
    TweenMax.from('.outer', 2, {opacity: 0, delay: 0.5, ease:Quad.easeOut});
    TweenMax.from('#splash .title', 3, {opacity: 0, y: 75, delay: 1.5, ease:Expo.easeOut});
  })
  .addTo(controller);

  $("#more").click((e) => {
    e.preventDefault();
    scrollToAnchor('#about');
  });

  $(".carousel").slick({
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    inifinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  })

});