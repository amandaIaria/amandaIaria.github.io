$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#navbar',
		lockAnchors: true,
		anchors:['header', 'dealear', 'portfolio', 'skills', 'about', 'contact', 'social'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['header', 'dealer', 'portfolio', 'skills', 'about', 'contact', 'social'],
		showActiveTooltip: true,
		});
	$(".alert").alert()
  // init Isotope
	/*var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});*/
// filter items on button click
	/*$('.filter-button-group').on( 'click', 'a', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
*/


});