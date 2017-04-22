/*
LibraryName: undefined,
Created by Ansari Abdullah,
Date of Creation: April 22, 2017 (11:10),
Version: v1.0
*/
var encode = function(text) {
	this.text = text;
	var bin = [];
	var encoded = '';
	for(i=0; i<this.text.length; i++) {
		var currentAscii = text.charCodeAt(i);
		var currentBin = currentAscii.toString(2);
		currentBin = '0'+currentBin;
		bin[i] = currentBin;
	}
	var pos=[];
	var bak='';
	for(i=0; i<bin.length; i++) {
		var curBin =  bin[i];
		bak='';
		pos[0] = curBin.charAt(1); 
		pos[1] = curBin.charAt(7);
		pos[2] = curBin.charAt(6);
		pos[3] = curBin.charAt(5);
		pos[4] = curBin.charAt(3);
		pos[5] = curBin.charAt(2);
		pos[6] = curBin.charAt(4);
		pos[7] = curBin.charAt(0);
		for(var j=0; j<=7; j++) {
			bak += pos[j];
		}
		bak = parseInt(bak,2);
		bak = String.fromCharCode(bak);
		encoded += bak;
	}
	var d = new Date().getTime();
	return encoded+'|'+timeEnc(d.toString());
};
var decode = function(val) {
	val = val.split('|');
	var text = val[0];
	var encTime = val[1];
	var decTime = timeDec(encTime);
	decTime = parseInt(decTime);
	var d = new Date(decTime);
	var decoded = '';
	var bin = [];
	for(i=0; i<text.length; i++) {
		var currentAscii = text.charCodeAt(i);
		var currentBin = currentAscii.toString(2);
		currentBin = currentBin;
		bin[i] = currentBin;
	}
	var pos=[];
	var bak='';
	for(i=0; i<bin.length; i++) {
		var curBin =  bin[i];
		bak='';
		pos[0] = curBin.charAt(7);
		pos[1] = curBin.charAt(0);
		pos[2] = curBin.charAt(5);
		pos[3] = curBin.charAt(4);
		pos[4] = curBin.charAt(6);
		pos[5] = curBin.charAt(3);
		pos[6] = curBin.charAt(2);
		pos[7] = curBin.charAt(1);
		for(var j=0; j<=7; j++) {
			bak += pos[j];
		}
		bak = parseInt(bak,2);
		bak = String.fromCharCode(bak);
		decoded += bak;
	}
	return {'value':decoded, 'time':d};
};

var timeEnc = function(val) {
	var ret = [];
	for(var i=0; i<val.length; i++){
		var tmp = val.charAt(i);
		switch(tmp) {
			case '1':
				ret[i] = '$';
				break;
			case '2':
				ret[i] = '+';
				break;
			case '3':
				ret[i] = '{';
				break;
			case '4':
				ret[i] = '~';
				break;
			case '5':
				ret[i] = '`';
				break;
			case '6':
				ret[i] = '•';
				break;
			case '7':
				ret[i] = '℅';
				break;
			case '8':
				ret[i] = '∆';
				break;
			case '9':
				ret[i] = '¥';
				break;
			case '0':
				ret[i] = '¢';
				break;
		}
	}
	return ret.join('');
}
function timeDec(val) {
	var ret = [];
	for(var i=0; i<val.length; i++){
		var tmp = val.charAt(i);
		switch(tmp) {
			case '$':
				ret[i] = '1';
				break;
			case '+':
				ret[i] = '2';
				break;
			case '{':
				ret[i] = '3';
				break;
			case '~':
				ret[i] = '4';
				break;
			case '`':
				ret[i] = '5';
				break;
			case '•':
				ret[i] = '6';
				break;
			case '℅':
				ret[i] = '7';
				break;
			case '∆':
				ret[i] = '8';
				break;
			case '¥':
				ret[i] = '9';
				break;
			case '¢':
				ret[i] = '0';
				break;
		}
	}
	return ret.join('');
}
