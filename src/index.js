import './styles/main.scss';

import branding_img from './assets/branding.png';
import goal_img from './assets/goal.png';

document.querySelectorAll('.logo').forEach(logo_img => {
    logo_img.src = branding_img;
});
document.querySelector('#goal-img').src = goal_img;