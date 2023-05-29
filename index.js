$('#ripple').ripples({
	resolution: 1000,
	dropRadius: 10,
	perturbance: 1,
});

let logo = document.getElementById('logo');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let btnLm = document.getElementById('btnLm');
let container = document.getElementById('container');
let brand = document.getElementById('brand');

// function addClassWithDelay() {
//   logo.classList.add('fade-in');
// }

logo.addEventListener('animationend', function(){
	if(logo.classList.contains('fade-in')){
		logo.classList.remove('fade-in');
		logo.classList.add('move-to-top-right');
	}
	else{
		text1.classList.remove('d-none');
		text1.classList.add('d-block', 'light-speed-in-left');
	}
});

text1.addEventListener('animationend', function(){
	if(text1.classList.contains('light-speed-in-left')){
		text1.classList.remove('light-speed-in-left');
		text1.classList.add('light-speed-out-right');
		text2.classList.remove('d-none');
		text2.classList.add('d-block', 'light-speed-in-right');
	}
	else{
		text3.classList.remove('d-none');
		text3.classList.add('d-block', 'light-speed-in-left2');
		btnLm.classList.remove('d-none');
		btnLm.classList.add('d-block', 'light-speed-in-left2');
	}
});

btnLm.addEventListener('animationend', function(){
	btnLm.classList.remove('light-speed-in-left2');
	btnLm.classList.add('fade-out');
	text3.classList.remove('d-block', 'light-speed-in-left2');
	text3.classList.add('fade-out');
	text2.classList.remove('d-block', 'light-speed-in-right');
	text2.classList.add('fade-out');
	container.classList.add('fade-out');

	logo.classList.remove('move-to-top-right');
	logo.classList.add('move-to-center');
	brand.classList.remove('d-none');
	brand.classList.add('fade-in-2');


});

