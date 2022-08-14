import gsap from "gsap";

const nav_btn = document.querySelector('#nav-btn')
const nav = document.querySelector('#nav');

let nav_timeline = gsap.timeline({defaults: {duration: .3, ease: 'power3.easeOut'}});
nav_timeline
    .to(nav, {top: 0, duration: .4})
    .to('.displaced', {y: 0, stagger: 0.1})
    .reverse();

let btn_timeline = gsap.timeline({defaults: {duration: .3, ease: 'power3.easeOut'}});
btn_timeline
    .to('.nav-btn__bar:nth-of-type(2)', {width: 0})
    .to('.nav-btn__bar:nth-of-type(1)', {rotate: 45, x: 1, y: 9})
    .to('.nav-btn__bar:nth-of-type(3)', {rotate: -45, x: 1, y: -9, delay: -0.3})
    .to(nav_btn, {rotate: 90})
    .reverse();

nav_btn.addEventListener('click', reverseTimeline);

const links = document.querySelectorAll('.nav__link');

links.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav__link--active').classList.remove('nav__link--active');
        link.classList.add('nav__link--active');
        window.innerWidth < 1280 && reverseTimeline();
    })
})

function reverseTimeline() {
    btn_timeline.reversed(!btn_timeline.reversed());
    nav_timeline.reversed(!nav_timeline.reversed());
}

document.querySelectorAll('.nav__lang').forEach(lang => {
    lang.addEventListener('click', () => {
        document.querySelector('.nav__lang--active').classList.remove('nav__lang--active');
        lang.classList.add('nav__lang--active');
    })
})

let sections = document.querySelectorAll('section');

window.onscroll = ()=>{
  sections.forEach(section =>{
    if(window.scrollY >= section.offsetTop - 300 && window.scrollY < section.offsetTop + section.offsetHeight){
        links.forEach(link => {
            if(link.href.includes(section.id)){
                document.querySelector('.nav__link--active').classList.remove('nav__link--active');
                link.classList.add('nav__link--active');
            }
        })
    }
  })
}

