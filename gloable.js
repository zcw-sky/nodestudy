var pet={
	words:'...',
	speak:function (msg) {
		console.log(msg+' '+this.words);
		console.log(this===pet);
		console.log(this);
	}
};

//pet.speak('speaks');

var dog={
	words:'wangwang'
}

pet.speak.call(dog,'speaks');