// ==UserScript==
// @name         HipHop
// @version      0.1
// @description  Show likes/dislikes on hotnewhiphop website
// @author       Ron Marks
// @include      http://www.hotnewhiphop.com/songs/
// ==/UserScript==

var songs = $(".gridItems-flex-wrap").children()
for (var i=0; i < songs.length; i++){
	var song = songs[i];
	var info = song["firstElementChild"];
	var link = info["href"];

	if (i == 0){
		$.get(link, function( data ) {
				var a = data.match(/class='upsNumber'>(.*)<\/em>/)
				var upsNum = a[1];
				var b = data.match(/class='downsNumber'>(.*)<\/em>/)
				var downsNum = b[1]
				console.log(a, b)
		});
	}
}