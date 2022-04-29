/**
 *  Nested Loops 
 *  Loop of Loop
 * 
**/
console.log('hello Developers')
/** for Loop **/
    let numbers=[];
    for(let i=1;i<=10;i++){
        let secondNumber=[];
        for(let j=1; j<=10;j++){
            // doubt 
            secondNumber.push(i*j);

        }
        //doubt
        numbers.push(secondNumber);

    }
    console.log(numbers);
