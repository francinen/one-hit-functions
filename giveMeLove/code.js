verse("never before","craving more",1);
		
					var preChorusLyrics = function(x,y,z){
						return x+" I'll fight my corner, "+y+" tonight I'll call you after my blood "+z+" alcohol. No, I just want to hold you.";
					};

					preChorusLyrics("And that","maybe","turns into");

					preChorusLyrics("You know","And that","is drowning");

					var chorusLyrics = ["Give a little time to me or burn this out","We'll play hide and seek to turn this around","All I want is the taste that your lips allow."];

					var chorus = function(){
						return chorusLyrics.join(". ");
					};

					chorus();
		
					var myMy = function(){
						var my = [];
						for (var i=0;i&#60;2;i++){
							my.push(" my");
						}
						my.unshift("My");
						my.push(" my...");
						var give = "give me love";
						return my+give;
					};
		
					var myMyLoop = function(repeat){
						var myMyArray = [];
						for (var i=0; i&#60;repeat;i++){
							myMyArray.push(myMy()+".");
						}
						return myMyArray.join('&#60;br&#62;');
					};

					myMyLoop(4);
					myMyLoop(1);
					myMyLoop(9);
		
					var myMyLover = function(repeat){
						var myMyArray = [];
						for (var i=0; i&#60;repeat;i++){
							myMyArray.push(myMy()+", lover.");
						}
						return myMyArray.join('&#60;br&#62;');
					};
					
					myMyLover(12);