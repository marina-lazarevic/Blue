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
    s_article.innerHTML = article;
    s_name.innerHTML = `- ${name} <span class="slider__name--role">${role}</span>`;
    s_image.src = image;
    s_image.alt = name;

    slider_timeline
        .to('#slider .hidden', {opacity: 1})
        img_container.classList.remove('slider__img-container--switching')
}

let controls = document.createElement('div');
controls.className = 'slider__controls';

testimonials.forEach(slide => {
    controls.innerHTML += `<button class="slider__indicator"></button>`;
})

slider.appendChild(controls);

const indicators = slider.querySelectorAll('.slider__indicator');
const img_container = slider.querySelector('.slider__img-container')

for(let i = 0; i < indicators.length; i++){
    indicators[i].addEventListener('click', () => {
        document.querySelector('.slider__indicator--active').classList.remove('slider__indicator--active');
        indicators[i].classList.add('slider__indicator--active');
        img_container.classList.add('slider__img-container--switching')
        slider_timeline
        .to('#slider .hidden', {opacity: 0})

        setTimeout(() => {fillSlide(testimonials[i])}, 400)
    });
}

fillSlide(testimonials[0]);
indicators[0].classList.add('slider__indicator--active')