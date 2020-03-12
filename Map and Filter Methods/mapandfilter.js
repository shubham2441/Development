let arr = [2,6, 17,28,46,68];

//function to add 1 in even numbers and subtract 1 from odd numbers
function convert(x){
    if(x%2==0){
        return x+1;
    }
    else{
        return x-1;
    }
}

//function to filter the prime numbers
function filter_array(num){
    for (let x=2;x*x<=num; x++){
        if(num%x==0){
           return false; 
        }
    }
    return true;
}

//using map method to apply convert functionality on each element of the array
let arr_modify = arr.map(convert);

//using filter method to filter the arr_modify according to filter_array functionality
let final_arr = arr_modify.filter(filter_array);

//printinf the final array
console.log(final_arr);