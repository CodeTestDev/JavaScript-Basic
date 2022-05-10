console.log("Hello Developers");

/**
* function 
* 
**/
// 1 define a fucntion 
// function keyword  functionName () { body of function}
// arguments ya parmamiters  / param
function add (x,y) {
	console.log("I am add function.");
	//console.log(x,y);
	//console.log(x+y);
	return x+y;
}

// call a function 

	// let firstTime=add(10,12);
	// let secondTime = add(15,20);
	// let thirdTime=add(9,4);
	// console.log(firstTime,secondTime,thirdTime);
//Function Expression

	
	const addConst = function () {
		console.log( "hello I'm Const function");
	}

	//addConst()

	// 3.  Arrow function 
	const addArrow = (first=null,second=null) => {
		console.log("hello i am arrow function");
		console.log(first,second);
	}
	
	//addArrow();


	// ( )  functionName as alias
	// ()=>{ }  arrow function
	// () calling a function 

	//immediate invoke function
	( (anil)=>{
		console.log("immediate invoke function");
		console.log(anil);
	} )  ("anil Kumar Meena");

	

	