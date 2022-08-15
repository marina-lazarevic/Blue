import './styles/main.scss';

import hero_img from './assets/hero-img.png';
import branding_img from './assets/branding.png';
import about_img from './assets/about.png';
import goal_img from './assets/goal.png';
import star_bg from './assets/star-bg.png';
import trophy_img from './assets/trophy.png';
import player from './assets/player.png';
import ball from './assets/player-ball.png'

import './js/slider';
import './js/nav';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

document.querySelector('#hero-img').src = hero_img;

document.querySelectorAll('.logo').forEach(logo_img => {
    logo_img.src = branding_img;
});

document.querySelectorAll('.star-img').forEach(star_img => {
    star_img.src = star_bg;
});

document.querySelector('#player-img').src = player;
document.querySelector('#ball-img').src = ball;
document.querySelector('#trophy-img').src = trophy_img;
document.querySelector('#about-img').src = about_img;
document.querySelector('#goal-img').src = goal_img;

document.querySelector('#close-popup').addEventListener('click', () => {
        document.querySelector('#popup').style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
})

let hero_margin = () => {
    let hero_margin_top = document.querySelector('#header').offsetHeight;
    document.querySelector('#hero').style.marginTop = `${hero_margin_top}px`;
}

window.addEventListener('resize', hero_margin);
window.addEventListener('load', hero_margin);

gsap.to('#ball-img', {
    scrollTrigger: {
        trigger: '#ball-img',
        scrub: 1,
    },
    rotate: -90,
    x: -20,
    ease: 'power3.easeOut'
})

document.querySelectorAll('.square--sm').forEach(square => {
    gsap.to(square, {
        scrollTrigger: {
            trigger: square,
            scrub: 1,
        },
        yPercent: -50,
        duration: 2,
        ease: 'power3.easeOut'
    })
})

gsap.to('.references__testimonial', {
    scrollTrigger: {
        trigger: '.references__testimonial',
        scrub: 1,
    },
    yPercent: -40,
    duration: 2,
    ease: 'power3.easeOut'
})


const config = { threshold: .6 };

let observer = new IntersectionObserver(function(entries, self) { 
  let targets = entries.map(entry => {
    if(entry.isIntersecting) {
      self.unobserve(entry.target);
      return entry.target;
    }
  });
  
  fadeIn(targets);
}, config);

document.querySelectorAll('.card').forEach(box => {
    box.style.opacity = 0;
  observer.observe(box);
});

function fadeIn(targets) {
  gsap.to(targets, { 
    opacity: 1, 
    stagger: 0.1,
    ease: 'power3.ease' 
  });
}