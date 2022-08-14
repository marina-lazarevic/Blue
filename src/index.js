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
