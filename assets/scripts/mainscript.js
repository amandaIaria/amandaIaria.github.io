$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: 				'#navbar',
		lockAnchors: 		true,
		anchors: 			['header', 'about', 'portfolio','games',  'art', 'contact', 'social'],
		navigation: 		true,
		navigationPosition: 'right',
		navigationTooltips: ['header', 'about', 'portfolio','games',  'art', 'contact', 'social'],
		showActiveTooltip: 	true,
	});
	$(".alert").alert();
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