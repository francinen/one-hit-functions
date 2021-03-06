var storyOfMyLife = {};

storyOfMyLife.lyrics = {};

storyOfMyLife.init = function(){
	storyOfMyLife.parseLyrics();

};

storyOfMyLife.parseLyrics = function(){
	storyOfMyLife.lyrics.story = 'The story of my life';
	storyOfMyLife.lyrics. = [storyOfMyLife.lyrics.story+', ', storyOfMyLife.lyrics.story+'. '];

	storyOfMyLife.lyrics.main = {
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
	storyOfMyLife.lyrics.solos = {
		harry: ['stories that I can\'t explain. ', 'empty for days. '],
		liam: ['She told me ', 'she don\'t feel the same about us in her bones. ', 'Seems to me that when I die these words will be written on my stone. ', 'I know that ','I\'ll see us in the light upon a hill. ', 'Although I am broken my heart is untamed still. '],
		zayn: ['The ground ', 'open wide. ', 'too ', 'And I\'ve been waiting for this time to come around, but, baby, running after you is like chasing the clouds. '],
		niall: ['colors that I can\'t change. ', 'in its cage. '],
		louis: ['The fire ', 'burning bright. ', 'so ']
	};

	storyOfMyLife.lyrics.harry = [
			{verse: mainLyrics.verses[0]+solos.harry[0]+mainLyrics.verses[1]+solos.harry[1]}, 
			{chorus: story[0]+mainLyrics.chorus[0]+mainLyrics.chorus[1]+story[0]+mainLyrics.chorus[2]+mainLyrics.chorus[3]+story[1]},
			{finale: mainLyrics.finale()}
		];
	storyOfMyLife.lyrics.liam = [
			{verse: solos.liam[0]+mainLyrics.verses[2]+solos.liam[1]+solos.liam[2]}, 
			{verse: solos.liam[3]+mainLyrics.verses[2]+solos.liam[4]+solos.liam[5]},
		];

	storyOfMyLife.lyrics.louis = [
			{pre: mainLyrics.preChorus[0]+solos.louis[0]+mainLyrics.preChorus[1]+solos.louis[1]+mainLyrics.preChorus[2]+solos.louis[2]+mainLyrics.preChorus[3]}
		];
	storyOfMyLife.lyrics.niall = [
			{verse: mainLyrics.verses[0]+solos.niall[0]+mainLyrics.verses[1]+solos.niall[1]},
			{chorus: story[0]+mainLyrics.chorus[0]+mainLyrics.chorus[1]}
		];
	storyOfMyLife.lyrics.zayn = [
			{pre: mainLyrics.preChorus[0]+solos.zayn[0]+mainLyrics.preChorus[1]+solos.zayn[1]+mainLyrics.preChorus[2]+solos.zayn[2]+mainLyrics.preChorus[3]},
			{bridge: solos.zayn[3]}
		];
	storyOfMyLife.lyrics.everyone = story[0]+mainLyrics.chorus[2]+mainLyrics.chorus[3]+story[1];

	console.log(harry[0].verse+liam[0].verse+zayn[0].pre+harry[1].chorus+niall[0].verse+liam[1].verse+louis[0].pre+harry[1].chorus+zayn[1].bridge+niall[1].chorus+all+harry[2].finale);

};






storyOfMyLife();

