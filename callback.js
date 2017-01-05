//test 
function callbacks (st) {
	// body...
	console.log('show callbacks:'+st);
}

function shows (cb,val) {
	// body...
	cb(val);
}

shows(callbacks,'test');
