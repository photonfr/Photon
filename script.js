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
	var _item = 0;
	var _line = 0;
	var addCode = true;
	while(_line < lines.length) {
		var command = "";
		while(_line < lines.length) {
			var char = lines[_item].charAt(_line)
			if(char =! "[") {
				if(addCode) {
					command = command + char + ""
					_item++;
				}
			} else {
				var addCode = false;
			}
		}
		_line++;
	}
	console.log(command);
}
