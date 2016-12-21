var i=0;

function ins () {
	// body...
	console.log(i);
}

function inss (ins) {
	// body...
	setTimeout(function(){
		i++;
		ins();
	},1000);
}

inss(ins);
