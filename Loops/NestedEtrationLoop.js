/**
 *  Nested Loops 
 *  Loop of Loop
 * 
**/
console.log('hello Developers')
/** for Loop **/
    
// forEach map

//  let data=[1,2]; 
// let data2=[3,4,5,6]
// data.forEach(function(item,index){
//    // console.log("loop");
//     data2.forEach(function(item2,index2){
//         console.log(item,item2);
//         if(item2=='4'){
//             break;
//         }
//         //console.log("nested loop");
//     })
// });


let i=1;
let u=5;
while(i<=u){
    let j=1; 
    while(j<=u){
        console.log(i,j);
        if(j==4){
            break;
        }
        j++;
    }
    i++;
}

