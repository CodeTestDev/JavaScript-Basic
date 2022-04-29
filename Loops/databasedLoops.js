/**
 * data based etration Loops
 * 
**/

console.log("Hello Developers");

/*
 *  For in
 *  
 *  syntex
 *  for ( key in object ) {
 *  
 *  }
 *  exmaple
*/
let human={
    "name":"Anil Kumar Meena",
    "age":"24",
    "eductaion":"MCA",
    "dob":"falkfjslaf",
    "tdo":"falkfjslaf",
    "text":"falkfjslaf",
    "msg":"falkfjslaf",
};

let number=[10,11,18,19];
    // for(key in human){
    //    //console.log(human[key]);
    // }
    // let run =1;

    // for ( index in number){

    //     console.log(run,index,number[index]);
    //     run++;
    //    // console.log()
    // }

/**
 *  for of  ( index array )
 *  for (variable of iterable) {

 *      // code block to be executed
 *  }
 *  for ( value of data ){
 *      code block 
 *  }
 **/  
/* 
    let str="anil meena";
        for( key of str) {
        console.log(key);
     }
 */

/**
 * 
 *  foreach  
 *  variable.forEach(function(item,index){
 *      block of code 
 * })
 * 
**/
    // number.forEach(function(item,index){
    //     console.log('hello',item,index);
    // })

    /*  
        number.forEach(myNum);

        function myNum(item,index) {
            console.log('hello',item,index);
        }

     */
    

/**
 * 
 *  map   
 *  variable.map(function(item,index){
 *      block of code 
 * })
 * array.map(function(currentValue, index, arr), thisValue)
 * // important  return new array 
**/

    // number.map(mapfun);

    // function mapfun(currentvalue,index){
    //     console.log(currentvalue,index);
    // }

    const numbers = [65, 44, 12, 4];
    const newArr = numbers.map(myFunction)

    function myFunction(num) {
        console.log(num);
      return num+2;
    }
    console.log(numbers);
    console.log(newArr);