const scrollSlower = require('./slowerScrolling.js');

const arrowUp = document.querySelector('.arrow-up');

const manageArrowUp = () => {
	if (window.pageYOffset > window.innerHeight / 3) {
		arrowUp.style.display = 'inline-block';
    arrowUp.setAttribute('tabindex', '0');
	}

	if (window.pageYOffset === 0) {
		arrowUp.style.display = 'none';
    arrowUp.setAttribute('tabindex', '-1');
	}
};

const scrollToTheTop = event => {
  scrollSlower(event);
};

window.addEventListener('scroll', manageArrowUp);
arrowUp.addEventListener('click', scrollToTheTop);
