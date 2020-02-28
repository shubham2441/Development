let arr = [2,6, 17,28,46,68];

function traverse(x){
    if(x%2==0){
        return x+1;
    }
    else{
        return x-1;
    }
}

function filter_array(num){
    
    for (let x=2;x*x<=num; x++){
        if(num%x==0){
           return false; 
        }
    }
    return true;
}

let map1 = arr.map(traverse);

map1 = map1.filter(filter_array);

console.log(map1);