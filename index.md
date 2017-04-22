## Welcome to EnxDec

## This is ever first encryption I have made by using my little 10g of brain, and combining it with JavaScript.

ENXDEC

### Feature

- Easy to use
- Encryption conatains Time of Encryption

### Disadvantage
- You can encode string conating space, but can't decode it back again
- I'm working on this mighty error, so for now don't encode string containing spaces, else you will get wrong decoded text;

** Usage: **

	`<script src='enxdec.js'></script>
	<input id="inp" value="ansabd"><br>
	<button onclick="encodeThis(document.getElementById('inp').value)">Encode</button>
	<button onclick="decodeThis(document.getElementById('inp').value)">Decode</button>
	<br>
	<font id="enc"></font><br><br>
	<font id="dec"></font>
	<script>
		function encodeThis(val) {
			document.getElementById('enc').innerHTML=xencode(val);
		}
		function decodeThis(val) {
			var dec = document.getElementById('dec');
			var ret = xdecode(val);
			dec.innerHTML = 'Value: '+ret.value+'<br><br>';
			dec.innerHTML += 'TOE: '+ret.time;
		}

	</script>`
	
## Notice:
** When you decode the text you will get return type, 'Object', so don't worry, it's pretty simple
let's assume, 
	 var dec = xdecode('---------');
	 var retrn = dec.value; //For getting decoded text
	 var toe = dec.time; //For getting when the text was encoded
Is'nt it pretty simple!! **
