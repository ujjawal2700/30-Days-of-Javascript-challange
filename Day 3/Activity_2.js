//Activity 2 - Nested if Else statements

//Task 3 
var a = 22, b = 5, c = 40;

if(a > b){
    if(a > c){
        console.log("a is the greatest");
    }else{
        console.log("c is the greatest");
    }
}else if (a < b){
    if(b > c){
        console.log("b is the greatest");
    }else{
        console.log("c is the greatest");
    }
}else if(a < c){
    if(c > b){
        console.log("c is the greatest");
    }
    else{
        console.log("b is the greatest");
    }
}