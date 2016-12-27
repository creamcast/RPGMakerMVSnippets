//=============================================================================
// fitpicture.js
//=============================================================================

/*:
 * @plugindesc automatically resizes a picture so it fits to any screen size
 * @author Pontifex
 *
 * @help Usage: FITPICTURE PICTURE_ID NAME ORIGINAL_WIDTH ORIGINAL_HEIGHT
 * PICTURE_ID - the picture slot number of where the picture will be stored
 * NAME - the name of the image file without the extension (store the image in the 'picture' folder in your project folder)
 * ORIGINAL_WIDTH - the original width of the image
 * ORIGINAL_HEIGHT - the original height of the image 
 * EXAMPLE: FITPICTURE 1 "MYIMAGE" 800 600
 */
(function(){
	function FP_GetArg(args, num, defaultv){
		if (args[num] === undefined){return defaultv;}
		var result = Number(Window_Base.prototype.convertEscapeCharacters(args[num]));
		if (result === NaN){return defaultv;}
		return result;
	}

	function FP_GetArgStr(args, num, defaultv){
		if (args[num] === undefined){return defaultv;}
		var result = Window_Base.prototype.convertEscapeCharacters(args[num]);
		result = result.replace(/['"]+/g, '');
		result = result.replace(/[_]+/g, ' ');
		return result;
	}


	var _Game_Interpreter_pluginCommand=Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function (command, args) {
		_Game_Interpreter_pluginCommand.call(this, command, args);
		if ((command || '').toUpperCase() === 'FITPICTURE') {
			var pictureId = FP_GetArg(args, 0, 1);
			var name = FP_GetArgStr(args, 1, "none");
			var origw = FP_GetArg(args, 2, 800);
			var origh =  FP_GetArg(args, 3, 600);
			var x = Graphics.width/2;
			var y = Graphics.height/2;
			var xscale = 100;
			var yscale = 100;
			var opacity = 255;
			var blendMode = 0; //0 normal, 1 blend
			
			//reduce size
			while(true){
				if ((xscale * 0.01) * origw > Graphics.width ){
					xscale--;
				}else{
					break;
				}	
			}
	
			while(true){
				if ((yscale * 0.01) * origh > Graphics.height ){
					yscale--;
				}else{
					break;
				}	
			}
	
			while(true){
				if ((xscale * 0.01) * origw < Graphics.width ){
					xscale++;
				}else{
					break;
				}
			}
	
			while(true){
				if ((yscale * 0.01) * origh < Graphics.height ){
					yscale++;
				}else{
					break;
				}
			}
	
			$gameScreen.showPicture(pictureId, name, 1, x, y, xscale, yscale, opacity, blendMode);


		}
	};
})();
