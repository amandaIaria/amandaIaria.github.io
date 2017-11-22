$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: 				'#navbar',
		lockAnchors: 		true,
		anchors: 			['header', 'about', 'portfolio','games',  'art', 'contact', 'social'],
		navigation: 		true,
		navigationPosition: 'right',
		navigationTooltips: ['header', 'about', 'portfolio','games',  'art', 'contact', 'social'],
		showActiveTooltip: 	true,
		slidesNavigation: true,
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
			var $container = 		$('.fullpage-wrapper'),

				$portSlide2 = 		$container.find('.portfolio-container .slide2'),
				$portSlide3 = 		$container.find('.portfolio-container .slide3'),
				$portSlide4 = 		$container.find('.portfolio-container .slide4'),
				$portSlide5 = 		$container.find('.portfolio-container .slide5'),
				$portSlide6 = 		$container.find('.portfolio-container .slide6'),
				$portSlide7 = 		$container.find('.portfolio-container .slide7'),
				$portSlide8 = 		$container.find('.portfolio-container .slide8'),

				$artSlide2 = 		$container.find('.art-container .slide2'),
				$artSlide3 = 		$container.find('.art-container .slide3'),
				$artSlide4 = 		$container.find('.art-container .slide4'),
				$artSlide5 = 		$container.find('.art-container .slide5'),

				$gameSlide2 = 		$container.find('.games-container .slide2'),
				$gameSlide3 = 		$container.find('.games-container .slide3'),
				$gameSlide4 = 		$container.find('.games-container .slide4'),
				$gameSlide5 = 		$container.find('.games-container .slide5')
			;

			if(index == 3 && nextSlideIndex == 1){
				$portSlide2.find('h2').addClass('animated fadeInLeft');
				$portSlide2.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$portSlide2.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 3 && nextSlideIndex == 2){
				$portSlide3.find('h2').addClass('animated fadeInLeft');
				$portSlide3.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$portSlide3.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 3 && nextSlideIndex == 3){
				$portSlide4.find('h2').addClass('animated fadeInLeft');
				$portSlide4.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$portSlide4.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 3 && nextSlideIndex == 4){
				$portSlide5.find('h2').addClass('animated fadeInLeft');
				$portSlide5.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$portSlide5.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 3 && nextSlideIndex == 5){
				$portSlide6.find('h2').addClass('animated fadeInLeft');
				$portSlide6.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$portSlide6.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 3 && nextSlideIndex == 6){
				$portSlide7.find('h2').addClass('animated fadeInLeft');
				$portSlide7.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$portSlide7.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 3 && nextSlideIndex == 7){
				$portSlide8.find('h2').addClass('animated fadeInLeft');
				$portSlide8.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$portSlide8.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 4 && nextSlideIndex == 1){
				$gameSlide2.find('h2').addClass('animated fadeInLeft');
				$gameSlide2.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$gameSlide2.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 4 && nextSlideIndex == 2){
				$gameSlide3.find('h2').addClass('animated fadeInLeft');
				$gameSlide3.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$gameSlide3.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 4 && nextSlideIndex == 3){
				$gameSlide4.find('h2').addClass('animated fadeInLeft');
				$gameSlide4.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$gameSlide4.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 4 && nextSlideIndex == 4){
				$gameSlide5.find('h2').addClass('animated fadeInLeft');
				$gameSlide5.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$gameSlide5.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 5 && nextSlideIndex == 1){
				$artSlide2.find('h2').addClass('animated fadeInLeft');
				$artSlide2.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$artSlide2.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 5 && nextSlideIndex == 2){
				$artSlide3.find('h2').addClass('animated fadeInLeft');
				$artSlide3.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$artSlide3.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 5 && nextSlideIndex == 3){
				$artSlide4.find('h2').addClass('animated fadeInLeft');
				$artSlide4.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$artSlide4.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
			else if(index == 5 && nextSlideIndex == 4){
				$artSlide5.find('h2').addClass('animated fadeInLeft');
				$artSlide5.find('.subtitle').addClass('animated fadeIn').css('animation-delay', '.3s');
				$artSlide5.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
			}
		},
		onLeave: function(index, nextIndex, direction){
			var $container = 		$('.fullpage-wrapper'),
				$aboutContainer =	$container.find('.about-container'),
				$projectContainer =	$container.find('.portfolio-container'),
				$gamesContainer =	$container.find('.games-container'),
				$artContainer =		$container.find('.art-container'),
				$contactContainer = $container.find('.contact-container'),
				$socialContainer =	$container.find('.social-container'),
				progressBarAmount
			;

			if( index == 1 && direction == 'down' && nextIndex == 2){
				$aboutContainer.find('.heading').addClass('animated fadeInLeft');
				$aboutContainer.find('p').addClass('animated fadeIn').css('animation-delay', '.3s');
				$aboutContainer.find('img').addClass('animated fadeInUp').css('animation-delay', '.6s');
				//$aboutContainer.find('.progress').addClass('animated fadeInRight').css('animation-delay', '.9s');
				$aboutContainer.find(".progress-bar").each(function(){
					if(!$(this).hasClass('animated')){
						progressBarAmount = $(this).attr('aria-valuenow') + "%";
						$(this).animate({ width: progressBarAmount }, 1000).addClass('animated');
					}
				});
				//$aboutContainer.addClass('animated rollIn').css('animation-delay', '1.7s');
			}
			else if( index == 2 && direction == 'down'){
				$projectContainer.find('.heading').addClass('animated fadeInLeft');
			}
			else if( index == 3 && direction == 'down' ){
				$gamesContainer.find('.heading').addClass('animated fadeInLeft');
			}
			else if( index == 4 && direction == 'down'){
				$artContainer.find('.heading').addClass('animated fadeInLeft');
			}
			else if( index == 5 && direction == 'down'){
				$contactContainer.find('h2').addClass('animated fadeInLeft');
			}
			else if( index == 6 && direction == 'down'){
				$socialContainer.find('h2').addClass('animated fadeInLeft');
				$socialContainer.find('.twitter').addClass('animated fadeInRight').css('animation-delay', '.3s');
				$socialContainer.find('.tumblr').addClass('animated fadeInUp').css('animation-delay', '.6s');
				$socialContainer.find('.instagram').addClass('animated fadeInLeft').css('animation-delay', '.9s')
			}
		}
	});
	$(".alert").alert();
});
