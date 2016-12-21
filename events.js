var EventEmitterObject=require('events').EventEmitter;

var em=new EventEmitterObject();
//设置最大监听 某个时间的数量，默认是10个
em.setMaxListeners(11);

function water(who){
	console.log(who+' 去做饭1');
}

em.on('wman',water);
em.on('wman',function(who){
        console.log(who+' 去做饭2');
});
em.on('wman',function(who){
        console.log(who+' 去做饭3');
});
em.on('wman',function(who){
        console.log(who+' 去做饭4');
});

em.on('wman',function(who){
        console.log(who+' 去做饭5');
});
em.on('wman',function(who){
        console.log(who+' 去做饭6');
});

em.on('wman',function(who){
        console.log(who+' 去做饭7');
});
em.on('wman',function(who){
        console.log(who+' 去做饭8');
});

em.on('wman',function(who){
        console.log(who+' 去做饭9');
});
em.on('wman',function(who){
        console.log(who+' 去做饭10');
});

em.on('wman',function(who){
	console.log(who+'去做返11');
});

em.on('man',function(who){
	console.log(who+'去玩吧');
});
em.on('man',function(who){
	console.log(who+'好好学习');
});
//删除某一个监听事件，第二个参数是回调函数的名称（必填）
//em.removeListener('wman',water);
//删除某个事件的所有监听事件，只传一个监听事件的名称
//em.removeAllListeners('wman');
//删除所有的监听事件
//em.removeAllListeners();

var b1=em.emit('wman','xiaozhang');
var b2=em.emit('man','honghong');
var b3=em.emit('ff','xiaoqiang');
//查看某个监听事件的数量
var lc=em.listenerCount('wman');
console.log(lc);

//console.log(b1);
//console.log(b2);
//console.log(b3);

