var storyOfMyLife = {};

storyOfMyLife.init = function(){
	storyOfMyLife.displayLyrics();
};


storyOfMyLife.repeated = {
		story: 'The story of my life',
		verses: ['Written on these walls are the ', 'Leave my heart open but it stays right here ', 'in the morning '],
		preChorus: ['And I\'ll be gone, gone tonight. ', 'beneath my feet is ', 'The way that I\'ve been holding on ','tight with nothing in between. '],
		chorus: [', I take her home, I drive all night to keep her warm and time is frozen. ', ', I gave her hope, I spend her love until she\'s broke inside. ']
	};

storyOfMyLife.solos = {
	harry: ['stories that I can\'t explain. ', 'empty for days. '],
	liam: ['She told me ', 'she don\'t feel the same about us in her bones. ', 'Seems to me that when I die these words will be written on my stone. ', 'I know that ','I\'ll see us in the light upon a hill. ', 'Although I am broken my heart is untamed still. '],
	zayn: ['The ground ', 'open wide. ', 'too ', 'And I\'ve been waiting for this time to come around, but, baby, running after you is like chasing the clouds. '],
	niall: ['colors that I can\'t change. ', 'in its cage. '],
	louis: ['The fire ', 'burning bright. ', 'so ']
};

storyOfMyLife.verse1 = function(a,b,c){
	var harry = a+storyOfMyLife.solos.harry[0]+b+storyOfMyLife.solos.harry[1];
	var liam = storyOfMyLife.solos.liam[0]+c+storyOfMyLife.solos.liam[1]+storyOfMyLife.solos.liam[2];
	return harry+liam;
};

storyOfMyLife.verse2 = function(a,b,c){
	var niall = a+storyOfMyLife.solos.niall[0]+b+storyOfMyLife.solos.niall[1];
	var liam = storyOfMyLife.solos.liam[3]+c+storyOfMyLife.solos.liam[4]+storyOfMyLife.solos.liam[5];
	return niall+liam;
};

storyOfMyLife.preChorus = {
	zayn: function(a,b,c,d){
		return a+storyOfMyLife.solos.zayn[0]+b+storyOfMyLife.solos.zayn[1]+c+storyOfMyLife.solos.zayn[2]+d
	},
	louis: function(a,b,c,d){
		return a+storyOfMyLife.solos.louis[0]+b+storyOfMyLife.solos.louis[1]+c+storyOfMyLife.solos.louis[2]+d
	}
};

storyOfMyLife.chorus = function(){
	var line1 = storyOfMyLife.repeated.story+storyOfMyLife.repeated.chorus[0];
	var line2 = storyOfMyLife.repeated.story+storyOfMyLife.repeated.chorus[1]+storyOfMyLife.repeated.story;
	return line1+line2;	
};

storyOfMyLife.bridge = function(){
	return storyOfMyLife.solos.zayn[3];
};

storyOfMyLife.finale = function(){
	var repeat = [];
	for (var i=0;i<3;i++){
		repeat.push(storyOfMyLife.repeated.story);
	};
	return repeat.join('. ')+'.';
};

storyOfMyLife.displayLyrics = function(){
	var vLine1 = storyOfMyLife.repeated.verses[0];
	var vLine2 = storyOfMyLife.repeated.verses[1];
	var vLine3 = storyOfMyLife.repeated.verses[2];
	var preLine1 = storyOfMyLife.repeated.preChorus[0];
	var preLine2 = storyOfMyLife.repeated.preChorus[1];
	var preLine3 = storyOfMyLife.repeated.preChorus[2];
	var preLine4 = storyOfMyLife.repeated.preChorus[3];

	$('.verse1').text(storyOfMyLife.verse1(vLine1, vLine2, vLine3));
	$('.verse2').text(storyOfMyLife.verse2(vLine1, vLine2, vLine3));
	$('.pre-chorus1').text(storyOfMyLife.preChorus.zayn(preLine1,preLine2,preLine3,preLine4));
	$('.pre-chorus2').text(storyOfMyLife.preChorus.louis(preLine1,preLine2,preLine3,preLine4));
	$('.chorus').text(storyOfMyLife.chorus());
	$('#bridge').text(storyOfMyLife.bridge());
	$('#finale').text(storyOfMyLife.finale());
};
	
$(function(){
	$('button').on('click', function(){
		storyOfMyLife.init();
	});
});

