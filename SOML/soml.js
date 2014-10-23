var storyOfMyLife = {};

storyOfMyLife.init = function(){
	storyOfMyLife.parseLyrics();
};

storyOfMyLife.parseLyrics = function(){
	
	var story = 'The story of my life';
	story = [story+', ', story+'. '];

	var mainLyrics = {
		verses: ['Written on these walls are the ', 'Leave my heart open but it stays right here ', 'in the morning '],
		preChorus: ['And I\'ll be gone, gone tonight. ', 'beneath my feet is ', 'The way that I\'ve been holding on ','tight with nothing in between. '],
		chorus: ['I take her home, ', 'I drive all night to keep her warm and time is frozen. ', 'I gave her hope, ', 'I spend her love until she\'s broke inside. '],
		finale: function(){
			var repeat = [];
			repeat.push(story[1]);
			for (var i=0;i<2;i++){
				repeat.unshift(story[0]);
			};
			return repeat.join(' ');
		}
	};
	var solos = {
		harry: ['stories that I can\'t explain. ', 'empty for days. '],
		liam: ['She told me ', 'she don\'t feel the same about us in her bones. ', 'Seems to me that when I die these words will be written on my stone. ', 'I know that ','I\'ll see us in the light upon a hill. ', 'Although I am broken my heart is untamed still. '],
		zayn: ['The ground ', 'open wide. ', 'too ', 'And I\'ve been waiting for this time to come around, but, baby, running after you is like chasing the clouds. '],
		niall: ['colors that I can\'t change. ', 'in its cage. '],
		louis: ['The fire ', 'burning bright. ', 'so ']
	};

	var harry = [
			{verse: mainLyrics.verses[0]+solos.harry[0]+mainLyrics.verses[1]+solos.harry[1]}, 
			{chorus: story[0]+mainLyrics.chorus[0]+mainLyrics.chorus[1]+story[0]+mainLyrics.chorus[2]+mainLyrics.chorus[3]+story[1]},
			{finale: mainLyrics.finale()}
		];
	var liam = [
			{verse: solos.liam[0]+mainLyrics.verses[2]+solos.liam[1]+solos.liam[2]}, 
			{verse: solos.liam[3]+mainLyrics.verses[2]+solos.liam[4]+solos.liam[5]},
		];

	var louis = [
			{pre: mainLyrics.preChorus[0]+solos.louis[0]+mainLyrics.preChorus[1]+solos.louis[1]+mainLyrics.preChorus[2]+solos.louis[2]+mainLyrics.preChorus[3]}
		];
	var niall = [
			{verse: mainLyrics.verses[0]+solos.niall[0]+mainLyrics.verses[1]+solos.niall[1]},
			{chorus: story[0]+mainLyrics.chorus[0]+mainLyrics.chorus[1]}
		];
	var zayn = [
			{pre: mainLyrics.preChorus[0]+solos.zayn[0]+mainLyrics.preChorus[1]+solos.zayn[1]+mainLyrics.preChorus[2]+solos.zayn[2]+mainLyrics.preChorus[3]},
			{bridge: solos.zayn[3]}
		];
	var everyone = story[0]+mainLyrics.chorus[2]+mainLyrics.chorus[3]+story[1];

	var singVerse1 = function(){
		$('#verse:nth-of-type(1)').text(harry[0].verse+liam[0].verse);
		console.log(harry[0].verse+liam[0].verse);
	};
	var singVerse2 = function(){
		$('#verse:nth-of-type(2)').text(niall[0].verse+liam[1].verse)
		console.log(niall[0].verse+liam[1].verse);
	};
	var singPreChorusZayn = function(){
		$('#pre-chorus:nth-of-type(1)').text(zayn[0].pre)
		console.log(zayn[0].pre);
	};
	var singPreChorusLouis = function(){
		$('#pre-chorus:nth-of-type(2)').text(louis[0].pre)
		console.log(louis[0].pre);
	};
	var singBridge = function(){
		$('#bridge').text(zayn[1].bridge)
		console.log(zayn[1].bridge);
	};
	var singChorusHarry = function(){
		$('.chorus').text(harry[1].chorus)
		console.log(harry[1].chorus);
	};
	var singChorusFinal = function(){
		$('#finale').text(niall[1].chorus+everyone+harry[2].finale)
		console.log(niall[1].chorus+everyone+harry[2].finale);
	};

	console.log(singVerse1()+singPreChorusZayn()+singChorusHarry()+singVerse2()+singPreChorusLouis()+singChorusHarry()+singBridge()+singChorusFinal());
	$('#lyrics').append(singVerse1(), singPreChorusZayn(), singChorusHarry(), singVerse2(), singPreChorusLouis(), singChorusHarry(), singBridge(), singChorusFinal())

};

		
$(function(){
	$('button').on('click', function(){
		storyOfMyLife.init();
	});
});

