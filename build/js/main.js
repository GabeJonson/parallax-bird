(function() {
	window.onscroll = () => {
	const scrolling = window.pageYOffset || document.documentElement.scrollTop;

	let image = document.querySelector('.img');
	let snow = document.querySelector('.snow');

	image.style.transform =  `translateY(${-(scrolling / 5)}px) skew(${(scrolling / 80) / 10}deg, ${(scrolling / 80) / 10}deg)`;
	image.style.width =  `calc(100% + ${scrolling / 120}%`;
	snow.style.transform =  `translate(${scrolling / 10}px, ${-(scrolling / 5)}px)`;
	snow.style.filter =  `blur(${5 + scrolling / 120}px)`;
}
}());