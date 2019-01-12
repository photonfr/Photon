var lines = []
var line = 0;
var addingLines = 1;
if(addingLines == 1) {
	var code = prompt("Enter code to use. (Enter nothing to stop)");
	line++;
}
if(code == "") {
	addingLines = 0;
	
} else {
	document.write("LINE " + line + ":" + code)
	lines.push(code)
}

function runCode() {
	var _item = 0;
	var _line = 0;
	var addCode = true;
	while(i < lines.length()) {
		var command = "";
		while(i < str.length()) {
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
	console.log(command)
}
