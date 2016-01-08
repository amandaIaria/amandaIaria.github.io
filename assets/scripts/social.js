(function($){

    var url = "https://pacific-mountain-4640.herokuapp.com/";

    var tumblr = url + "tumblr.php";
    var tumDiv = $("#tumblr");

    var instagram = url +"instagram.php";
    var instDiv = $("#instagram");

    var twitter = url +"twitter.php";
    var twitDiv = $("#twitter");


  /* $.ajax({
        //cache: true,
        url : tumblr,
        methods: "GET",

        failure: function(){
            tumDiv.html("no go");
            console.log("No GO");
        },
        success: function(data){
            tumDiv.removeClass("loading").html(data);
            console.log("success");
        }
    })*/

    instDiv.load(instagram, function(){$(this).removeClass("loading") });

    tumDiv.load(tumblr, function(){$(this).removeClass("loading") });

    twitDiv.load(twitter, function(){$(this).removeClass("loading") });









}(jQuery))