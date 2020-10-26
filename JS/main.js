import "./anim.js";

let flag = 0;

if (window.scrollTop) {
    flag = 0;
    // To make sure landing auto scroll only occurs once
}
const p = document.querySelector('p');
const scrollText = document.querySelector('#jump-button-1');
const mouse = document.querySelector('.custom-cursor');
const mouseFollower = document.querySelector('.custom-cursor-follower');
const circleType1 = new CircleType(document.getElementById('Scroll-Text')).radius(120)

if(window.innerWidth <= 440){
    circleType1.radius(90);
}

// -------> custom cursor code here--------------//
window.addEventListener('mousemove', e => {
    mouse.style.top = e.pageY + 'px';
    mouseFollower.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
    mouseFollower.style.left = e.pageX + 'px';

});


p.addEventListener("mouseover", () => {
    mouse.classList.add('cursor-effect-1');
})

p.addEventListener('mouseleave', () => {
    mouse.classList.remove('cursor-effect-1');
});

scrollText.addEventListener('mouseover' , () => {
    mouse.classList.add('cursor-effect-2');
})

scrollText.addEventListener('mouseleave' , () => {
    mouse.classList.remove('cursor-effect-2');
})

document.addEventListener('click' , () => {
    mouse.classList.add('cursor-expand');
    setTimeout(() => {
        mouse.classList.remove('cursor-expand');
    },300);
});

document.getElementById('jump-button-1').addEventListener('click', () => {
    console.log("the button was clicked we will now jump");
});


var isInViewport = function (elem) {
	var distance = elem.getBoundingClientRect();
	return (
		distance.top >= 0 &&
		distance.left >= 0 &&
		distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		distance.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
