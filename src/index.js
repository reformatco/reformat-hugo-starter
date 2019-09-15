// import Swup from 'swup';
// import SwupPreloadPlugin from '@swup/preload-plugin';
// import SwupScrollPlugin from '@swup/scroll-plugin';
// import SwupDebugPlugin from '@swup/debug-plugin';
import ScrollReveal from 'scrollreveal';
import WebFont from 'webfontloader';
import $ from 'cash-dom';
import Flickity from 'flickity';
import 'flickity-fade';
import imagesLoaded from 'imagesloaded';
import 'lazysizes';

import "./css/main.css";

$(() => {

  const slideIn = {
    duration: 700,
    interval: 200,
    viewOffset: {
      bottom: 300
    },
  };

  let state = {
    navOpen: false,
    logoHidden: false,
    logoReverse: false,
    flkty: {},
  };

  const isPhone = () => {
    return window.screen.width < 768 && navigator.maxTouchPoints === 1;
  };

  const toggleBranding = (test) => {
    state.logoHidden = test;
    if (state.logoHidden) {
      $('body').addClass('scrolling');
    }else{
      $('body').removeClass('scrolling');
    }
  };

  const initSite = () => {
    document.querySelector('.no-js').classList.remove('no-js');
    WebFont.load({
      timeout: 3000,
      custom: {
        families: ['Founders Grotesk','TT Trailers']
      },
      active: () => {
        sessionStorage.setItem('fonts', true);
      },
    });

  }

  const pageMount = () => {

    document.addEventListener('scroll', () => {
      toggleBranding( window.scrollY > 333 );
    });

    if (document.querySelector('.page-menu')) {
      const observer = new IntersectionObserver(
        ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
        {threshold: [1]}
      );
      observer.observe(document.querySelector('.page-menu'));
    }

    const sliders = document.querySelectorAll('.slider');
    if (document.querySelector('.slider')) {
      sliders.forEach((slider, index) => {
        imagesLoaded( slider, ( instance ) => {
          if (slider.querySelectorAll('.slide').length > 1) {
            const options = {
              cellSelector: '.slide',
              resize: true,
              prevNextButtons: false,
              pageDots: true,
              autoPlay: 2000,
              draggable: true,
              wrapAround: true,
              // pauseAutoPlayOnHover: true,
              on: {
                ready: () => {
                  if(index === (sliders.length-1) ){
                    // console.log('last element');
                    ScrollReveal().reveal('.slidein', slideIn);
                  }
                }
              }
            };
            const flkty = new Flickity(slider, options);
          }
          slider.classList.add('loaded');
        });
      });

    }else{
      ScrollReveal().reveal('.slidein', slideIn);
    }

    const carousel = document.querySelector('.carousel');
    if (carousel) {
      imagesLoaded( '.carousel', ( instance ) => {
        if (document.querySelectorAll('.carousel .slide').length > 1) {
          const options = {
            cellSelector: '.slide',
            resize: true,
            prevNextButtons: false,
            pageDots: false,
            fade: true,
            autoPlay: 2000,
            draggable: false,
            wrapAround: true,
            pauseAutoPlayOnHover: false,
          };
          const flkty = new Flickity(carousel, options);
        }
        carousel.classList.add('loaded');
      });

    }

    const navbar = document.querySelector('.modal-nav');
    $('.burger').on('click', () => {
      $('body').toggleClass('nav-active');
      if (!state.navOpen) {
        $('.burger').attr('aria-expanded','true');
      } else {
        $('.burger').attr('aria-expanded','false');
      }
      state.navOpen = !state.navOpen;
    });

  }

  // const swup = new Swup({
  //   animateHistoryBrowsing: true,
  //   cache: true,
  //   plugins: [new SwupDebugPlugin(), new SwupScrollPlugin(), new SwupScrollPlugin({
  //     doScrollingRightAway: true,
  //     animateScroll: true,
  //     scrollFriction: 0.3,
  //     scrollAcceleration: 0.04,
  // })]
  // });

  // swup.on('clickLink', (e) => {
  //   console.log( $(e.target).attr('href') );
  // });

  // swup.on('contentReplaced', () => {
  //   pageMount();
  // });

  // swup.on('willReplaceContent', () => {
  //   state.navOpen = false;
  //   $('body').removeClass('nav-active');
  //   $('.burger').attr('aria-expanded', 'false');
  // });

  initSite();
  pageMount();

});
