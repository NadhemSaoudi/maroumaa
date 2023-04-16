// This script is optional and not necessary for the animation
// It simply adds a click event listener to the heart icon

const hearts = document.querySelectorAll('.heart');
hearts.forEach((heart) => {
	heart.addEventListener('click', () => {
		heart.classList.add('active');
		setTimeout(() => {
			heart.classList.remove('active');
		}, 1000);
	});
});
