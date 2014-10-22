
$(function(){
	var giveMeLove = function(){
	var verseLyrics = {
		first: "Give me love like ",
		second: "'cause lately I've been ",
		third: [
			"Paint splattered teardrops on my shirt.",
			"And it's been a while but I still feel the same."
		],
		fourth: [
			"Told you I'd let them go.",
			"Maybe I should let you go."
		]
	};
	var verse = function(a,b,c) {
		return verseLyrics.first+a+", "+verseLyrics.second+b+". "+verseLyrics.third[c]+" "+verseLyrics.fourth[c];
	};

	var preChorusLyrics = function(x,y,z){
		return x+" I'll fight my corner, "+y+" tonight I'll call you after my blood "+z+" alcohol. No, I just want to hold you.";
	};
	var chorusLyrics = ["Give a little time to me or burn this out","We'll play hide and seek to turn this around","All I want is the taste that your lips allow."];

	var myMy = function(){
		var my = [];
		for (var i=0;i<2;i++){
			my.push(" my");
		}
		my.unshift("My");
		my.push(" my...");
		var give = "give me love";
		return my+give;
	};

	var myMyLoop = function(repeat){
		var myMyArray = [];
		for (var i=0; i<repeat;i++){
			myMyArray.push(myMy()+".");
		}
		return myMyArray.join('<br>');
	};

	var myMyLover = function(repeat){
		var myMyArray = [];
		for (var i=0; i<repeat;i++){
			myMyArray.push(myMy()+", lover.");
		}
		return myMyArray.join('<br>');
	};
	
	var chorus = function(){
		return chorusLyrics.join(". ");
	};

	// return verse("her","waking up alone",0)+preChorusLyrics("And that","maybe","turns into")+chorus()+myMyLoop(4)+verse("never before","craving more",1)+preChorusLyrics("You know","And that","is drowning")+chorus()+myMyLoop(1)+chorus()+myMyLoop(5)+myMyLover(12)+myMyLoop(9);
	var play = function() {
		$('#verse1').text(verse("her","waking up alone",0));
		$('#pre-chorus1').text(preChorusLyrics("And that","maybe","turns into"));
		$('.chorus').text(chorus());
		document.getElementById('loop1').innerHTML=myMyLoop(4);
		$('#verse2').text(verse("never before","craving more",1));
		$('#pre-chorus2').text(preChorusLyrics("You know","And that","is drowning"));
		$('.chorus').text(chorus());
		 document.getElementById('loop2').innerHTML=myMyLoop(1);
		$('.chorus').text(chorus());
		document.getElementById('loop3').innerHTML=myMyLoop(5);
		document.getElementById('loop4').innerHTML=myMyLover(12);
		document.getElementById('loop5').innerHTML=myMyLoop(9);
	};

	return play();
	
};

	$('button').on('click', function(){
		giveMeLove();
	});
});



