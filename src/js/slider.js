import testimonials from '../data/references.json';
import '../assets/testimonial1.png';
import gsap from 'gsap';

const slider = document.querySelector('#slider');

const s_article = document.querySelector('#s-article');
const s_name = document.querySelector('#s-name');
const s_image = document.querySelector('#s-image');

let slider_timeline = gsap.timeline({defaults: {duration: .3, ease: 'power3.easeOut'}});

function fillSlide(testimonial){
    let { image, name, role, testimonial:article } = testimonial;
    console.log(name);
    s_article.innerHTML = article;
    s_name.innerHTML = `- ${name} <span class="slider__name--role">${role}</span>`;
    s_image.src = image;
    s_image.alt = name;

    slider_timeline
        .to('#slider .displaced', {y: 0, opacity: 1, stagger: .2})
        .to(s_image, {y: 0, opacity: 1, delay: -0.3}) //for now
}

let controls = document.createElement('div');
controls.className = 'slider__controls';

testimonials.forEach(slide => {
    controls.innerHTML += `<button class="slider__indicator"></button>`;
})

slider.appendChild(controls);

const indicators = slider.querySelectorAll('.slider__indicator');

for(let i = 0; i < indicators.length; i++){
    indicators[i].addEventListener('click', () => {
        document.querySelector('.slider__indicator--active').classList.remove('slider__indicator--active');
        indicators[i].classList.add('slider__indicator--active');
        slider_timeline
        .to('#slider .displaced', {y: '40%', opacity: 0, stagger: .2})
        .to(s_image, {y: '-20%', opacity: 0, delay: -0.5, duration: .4}) //for now
        setTimeout(() => {fillSlide(testimonials[i])}, 350)
    });
}

fillSlide(testimonials[0]);
indicators[0].classList.add('slider__indicator--active')