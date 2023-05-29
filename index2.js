let female = document.getElementById('female');
let headline1 = document.getElementById('headline1');
let headline2 = document.getElementById('headline2');
let subheadline = document.getElementById('subheadline');
let learnmore = document.getElementById('learnmore');
let logo = document.getElementById('logo');
let replay = document.getElementById('replay');

female.addEventListener('animationend', function(){
	if(female.classList.contains('fade-in')){
		female.classList.remove('fade-in');
		female.classList.add('fade-out');
	}
	else{
		headline2.classList.remove('d-none');
		headline2.classList.add('d-block', 'slide-in-right');
	}
});

headline1.addEventListener('animationend', function(){
	if(headline1.classList.contains('slide-in-left')){
		headline1.classList.remove('slide-in-left');
		headline1.classList.add('minimize-top-right');
	}
	else{
		subheadline.classList.remove('d-none');
		subheadline.classList.add('fade-in2');
		learnmore.classList.remove('d-none');
		learnmore.classList.add('fade-in3');
		logo.classList.remove('d-none');
		logo.classList.add('slide-in-left');
		replay.classList.remove('d-none');
		replay.classList.add('fade-in4');
	}
});


function ulit(){
	headline1.classList.remove('minimize-top-right');
	headline2.classList.add('d-none');
	subheadline.classList.add('d-none'); 
	learnmore.classList.add('d-none');
	logo.classList.add('d-none');
	replay.classList.add('d-none');
	female.classList.remove('d-none');
	female.classList.remove('fade-out');
	female.classList.add('fade-in');
	headline1.classList.add('slide-in-left');
}