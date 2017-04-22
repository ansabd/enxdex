## Welcome to EnxDec

## This is ever first encryption I have made by using my little 10g of brain, and combining it with JavaScript.


```markdown
ENXDEC

### Feature

- Easy to use
- Encryption conatains Time of Encryption

### Disadvantage
- You can encode string conating space, but can't decode it back again
- # I'm working on this mighty error, so for now don't encode string containing spaces, else you will get wrong decoded text;

** Usage: **

`
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
  `
