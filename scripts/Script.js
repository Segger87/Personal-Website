$(document).ready(function () {
	var $videoSrc;

	$('.video-btn').click(function () {
		$videoSrc = $(this).data("src");
	});
	console.log($videoSrc);

	$('#myModal').on('shown.bs.modal', function (e) {
		$("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
	});

	$('#myModal').on('hide.bs.modal', function (e) {
		$("#video").attr('src', $videoSrc);
	});
});


