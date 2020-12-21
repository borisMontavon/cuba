//Top Button
$(window).scroll(function() {
	const height = $(window).scrollTop();
	
	if (height > 150) {
		$('#toTopButton').fadeIn();
	} else {
		$('#toTopButton').fadeOut();
	}
});
	
$(document).ready(function() {
	$('#toTopButton').click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0}, "slow");
		return false;
	});

	//Tiny Slider
	const slider = tns({
		container: '.header__bg',
		items: 1,
		slideBy: 'page',
		mode: 'gallery',
		controlsContainer: "#customize__controls",
		autoplay: true,
		autoplayTiemOut: 8000,
		speed: 600,
		autoplayButton: "#customize__toggle",
		mouseDrag: true
	});

	navSlide();
});

//Nav animation
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav__links');
	const navLinks = document.querySelectorAll('.nav__links li');
	const navLinksA = document.querySelectorAll('.nav__links li a');
	
	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('nav__active');

		// Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation !== '') {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinksFade .5s ease forwards ${index / 7 + 0.2}s`;
			}
		});

		//Burger animation
		burger.classList.toggle('toggle');
	});

	//Nav hide on click
	navLinksA.forEach((linkA) => {
		linkA.addEventListener('click', () => {
			navLinks.forEach((link) => {
				link.style.animation = '';
			});

			nav.classList.toggle('nav__active');
			burger.classList.toggle('toggle');
		});
	});
};

//Dark/light mode toggle
const addDarkmodeWidget = () => {
	
	const options = {
		bottom: 'unset', // default: '32px'
		right: 'unset', // default: '32px'
		left: '20px', // default: 'unset'
		time: '0.5s', // default: '0.3s'
		mixColor: '#fff', // default: '#fff'
		backgroundColor: 'rgba(255, 255, 255, 0.5)',  // default: '#fff'
		buttonColorDark: 'rgba(0, 9, 19, 0.5)',  // default: '#100f2c'
		buttonColorLight: 'rgba(255, 255, 255, 0.5)', // default: '#fff'
		saveInCookies: true, // default: true,
		label: '🌓', // default: ''
		autoMatchOsTheme: true // default: true
	};
	  
	const darkmode = new Darkmode(options);
	darkmode.showWidget();
}
window.addEventListener('load', addDarkmodeWidget);