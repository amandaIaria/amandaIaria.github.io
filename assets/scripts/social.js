(function($){

	var url = 'https://pacific-mountain-4640.herokuapp.com/',
		$containerDiv = $('.social-container'),
		$tumblrDiv = $containerDiv.find('.tumblr'),
		$instagramDiv = $containerDiv.find('.instagram'),
		$twitterDiv = $containerDiv.find('.twitter'),
		tumblr = url + 'tumblr.php',
		instagram = url +'instagram.php',
		twitter = url +'twitter.php'
	;

	$instagramDiv.load(instagram, function(){$(this).removeClass('loading') });
	$tumblrDiv.load(tumblr, function(){$(this).removeClass('loading') });
	$twitterDiv.load(twitter, function(){$(this).removeClass('loading') });

}(jQuery))