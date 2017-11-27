// problems 1-5
var add = function (a,b) {
	return a + b
}

var mul = function (a,b) {
	return a * b
}

var addF = function(x) {
	return function(d) {
		return x+d;
	};
};


var applyF = function(func) {
	return function(x){
		return function(y){
			return func(x,y)
		}	
	}
};

// problems 6-9
function curry(func,x){
	return function(y){
		return func(x,y)
	}
}

var inc = curry(add,1)	
var inc2 = applyF(add)(1)
var inc3 = addF(1)	

function methodize(func) {
	return function(x){
		return func(this,x)
	}
};
function deMethodize(func) {
	return function(that,y){
		return func.call(that,y)
	}
};

Number.prototype.add = methodize(add);
x = deMethodize(Number.prototype.add)(5,6)

// problems 10-12

function twice(func){
	return function(x){
		return func(x,x)
	}
}

var double = twice(add)
var square = twice(mul)

// function composeU(funcA,funcB){
// 	return function (x) {
// 			var funcResult = funcA(x,x) 
// 			return funcB(funcResult)
// 	}		
// }

function composeU(f,g) {
	return function (a) {
		return(g(f(a)))
	}
}
function composeB(f,g) {
	return function (a,b,c) {
		return(g(f(a,b),c))
	}
}

// problems 13-15

// function once(func) {
// 	return function (a,b) {
// 		if (this.x=='error') {
// 			throw new Error("nah bitch")	
// 		}
// 		this.x = "error" 
// 		return func(a,b)
// 	}
// }
function once(func) {
	return function () {
		var f = func;
		func = null;
		return f.apply(this,arguments)
	};
}

function counterF(x) {
	obj = {
		val: x,
		inc: function () {
			this.val = this.val + 1;
			return this.val
		},
		dec: function () {
			this.val = this.val - 1;
			return this.val
		}
	}
	return obj;
}

counter = counterF(10)
// console.log(counter.inc())
// console.log(counter.dec())


// function revocable(func) {
// 	obj = {
// 		revoked: false,
// 		revoke: function () {
// 			this.revoked = true
// 		},
// 		invoke: function(){
// 			if (this.revoked){
// 				throw 'nah';
// 			}
// 			return func()
// 		}
// 	}
// 	return obj;
// }
function revocable(nice) {
	return {
		invoke: function () {
			return nice.apply(
				this,
				arguments
				);
		},
		revoke: function () {
			nice = null;
		}
	};
} 
function test(c){
	console.log(c)
}
temp = revocable(test)
temp.invoke(7)
temp.invoke(9)
temp.revoke()
temp.invoke(10)