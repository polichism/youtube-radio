  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  	var youtube_key = document.getElementById('youtube-key').value;
  	if(youtube_key !== '') {
	  // Replace the 'ytplayer' element with an <iframe> and
	  // YouTube player after the API code downloads.
	  var player;
	  function onYouTubePlayerAPIReady() {
	    player = new YT.Player('ytplayer', {
	      height: '390',
	      width: '640',
	      videoId: youtube_key
	    });
	    player.playVideo();
	    console.log(player);
	  }


	}

$(document).ready(function(){

}) 