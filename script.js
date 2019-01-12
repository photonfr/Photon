var lines = [];
var line = 0;
var addingLines = 1;
while(addingLines == 1) {
	var code = prompt("Enter code to use. (Enter nothing to stop)");
	line++;
	if(code == "") {
	addingLines = 0;
	
	} else {
		document.writeln("LINE " + line + ":" + code);
		lines.push(code);
	}
}

function runCode() {
	var _line = 0;
	var addCode = true;
	while(_line < lines.length) {
		var command = "";
		var i = 0;
		while(i < lines[_line].length) {
			var char = lines[_line].charAt(_line);
			if(char =! "[") {
				if(addCode) {
					command = command + char + "";
					i++;
				}
			} else {
				var addCode = false;
			}
		}
		_line++;
	}
	console.log(command);
}
