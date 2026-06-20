function sumoftriple(a){

    let sum = 0;
    a = [12,13,41,4,2,45,6];
    for (let i = 0; i< a.length ; i++ ){
        if((a[i]%2 === 0)) {       //checking if it is even or not
            const tripleEvenNumber = a[i] * 3;  // now multiplying it with 3 for triple number
            sum += tripleEvenNumber;
            console.log([tripleEvenNumber]); // the number that are excuted as such
        }
    
}
return sum;
}

console.log(sumoftriple());  //now printing the final output that is sum of triple even numbers 
//end

//new
function addOne(num){
    
    return num + 1;

}

const numx = [1,2,3,4,5,6];
const mapx = numx.map(addOne);

console.log(mapx);
//end