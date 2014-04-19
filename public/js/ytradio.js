
function set_next_key() {
	var random = Math.floor((Math.random()*10)+1);
	var number = 1;
	if(youtube_key !== '') {
		$.ajax({
			url: 'https://gdata.youtube.com/feeds/api/videos/' + youtube_key + '/related?v=2',
			context: 'text/xml',
			dataType: "xml",
		}).done(function(data) {
			
			$(data).find('entry').each(function(){
				if(random == number) {
		            key = $(this).find("videoid").text()
		            $('#youtube_key').val(key);
		            return false;
		        } else {
		        	number = number + 1;
		        }
			});
		});
	}
}
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
	  	youtube_key = document.getElementById('youtube-key').value;

	    player = new YT.Player('ytplayer', {
	      height: '390',
	      width: '640',
	      videoId: youtube_key,
	      events: {
            'onReady': onPlayerReady,
          }
	    });
	    set_next_key();
	    player.addEventListener("onStateChange", "onytplayerStateChange");
	  }

	  function onPlayerReady(evt) {
	  	evt.target.playVideo();
	  }

	  function onytplayerStateChange(newState) {
	    if(newState.data == 0) {
	    	player = new YT.Player('ytplayer');
	    	onYouTubePlayerAPIReady();
	    }
	  }



	}

