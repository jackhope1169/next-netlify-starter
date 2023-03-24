<!DOCTYPE html>
<html>
<head>
	<title>4 Character Code Generator</title>
	<script type="text/javascript">
		var generated_numbers = [];
		function generateCode() {
			var code = "";
			var characters = "0123456789";
			var code_length = 4;
			do {
				code = "";
				for (var i = 0; i < code_length; i++) {
					code += characters.charAt(Math.floor(Math.random() * characters.length));
				}
			} while (generated_numbers.indexOf(code) >= 0 && generated_numbers.length < 9999);
			if (generated_numbers.length >= 9999) {
				document.getElementById("code").innerHTML = "ALL NUMBERS CHECKED";
			} else {
				document.getElementById("code").innerHTML = code;
				generated_numbers.push(code);
				document.getElementById("old_numbers").innerHTML = "Old Generated Numbers: " + generated_numbers.join(", ");
				document.getElementById("num_generated").innerHTML = "Number of Generated Numbers: " + generated_numbers.length;
			}
		}
	</script>
</head>
<body>
	<div style="float: left;">
		<p>Click the button to generate a 4 digit code:</p>
		<button onclick="generateCode()">Generate</button>
		<p id="code"></p>
		<p id="num_generated">Number of Generated Numbers: 0</p>
	</div>
	<div style="float: right;">
		<p id="old_numbers">Old Generated Numbers: </p>
	</div>
</body>
</html>
