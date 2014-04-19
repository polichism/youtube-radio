<html>
	<head>
		<title>Find trackYTRadio</title>
		<link rel="stylesheet" href="/css/default.css">

	</head>
	<body>
		<div class="overlay"></div>
		<div id="wrapper">
			<div id="cell">
				<div id="search">
					<form method="POST" action="">
						<input type="text" name="title" class="input-xlarge" placeholder="title"><input type="submit" value="search" class="btn-style">
					</form>
				</div>
				<?php if(isset($video_id)): ?> 
					<input type="hidden" id="youtube-key" value="<?php echo $video_id ?>">
					<link rel="http://gdata.youtube.com/schemas/2007#video.related"
     type="application/atom+xml"
     href="https://gdata.youtube.com/feeds/api/videos/<?php echo $video_id ?>/related?v=2"/>
     				<input type="hidden" id="next-youtube-key">
				<?php else: ?>
					<input type="hidden" id="youtube-key" value="">
				<?php endif ?>

					<div id="youtube">
						<div id="ytplayer"></div>
					</div>
				

			</div>
		</div>
		<script type="text/javascript" src="/js/jquery.js"></script>
		<script type="text/javascript" src="/js/ytradio.js"></script>
	</body>
</html>