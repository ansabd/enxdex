Hello, I am 16 years old boy, and I'm going to publish my ever first made
encryption I have made using JavaScript. This is the v1.0 of my encryption.
The feature I have addded to this encryption is quite simple, I have added
TOE [Time of Encryption}, which tells you the time of encryption when you decode any 
encoded text.
```
	<script src='enxdec.js'></script>
	<input id="inp" value="ansabd"> <br>
	<button onclick="encodeThis(document.getElementById('inp').value)">Encode</button>
	<button onclick="decodeThis(document.getElementById('inp').value)">Decode</button>
	<br>
	<font id="enc"></font><br><br>
	<font id="dec"></font>
	<script>
		function encodeThis(val) {
			document.getElementById('enc').innerHTML=encode(val);
		}
		function decodeThis(val) {
			var dec = document.getElementById('dec');
			var ret = decode(val);
			dec.innerHTML = 'Value: '+ret.value+'<br><br>';
			dec.innerHTML += 'TOE: '+ret.time;
		}

	</script>
```
Enjoy the new algorithm of Encryptionm, and this is OpenSource,
if you find any mistake, error, or any other feedback feel free to tell me.

I'm waiting for your feedback, means anyone can tell me idea for adding any other features.
3nj0y (0d!nG !!!
