const fruits =  ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
///					0		 1  		2    	3
///// fruits = ["Banana","Banana","Orange", "Apple"];
///// fruits = ["Banana","Orange","Banana", "Orange",];

//let temp=fruits.copyWithin(2,0,2);
//console.log(temp);

/**
 * copyWithin(firstArguments,secondArguments);
 * 
 * firstArguments => vo index se par hame value fo change karna hain ,
 * 
 * SecondeArguments =>   vo index jisaki value copy karna h firstArgument value index par  
 * elements/ item /value => move 
 **/
 console.log(fruits);
 	function custCopyWithIn(fa,sa,ta) {
 		let temp=0; 
		for(i=0;i<fruits.length;i++){
		 	if(i==sa){
		 		for(j=0;j<fruits.length;j++){
		 			if(fa<=j){
						if(temp<ta){
							fruits[j]=fruits[i];
							i++;
							temp++;
						}else{
							break;
						}					
		 			}
				}
				break;
		 	}
		}
 	}
 	custCopyWithIn(2,0,2);
 console.log(fruits);
 custCopyWithIn(2,0,3);
 console.log(fruits);