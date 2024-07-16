//Activity 4 - Nested Loops

//task 7
// for(var i = 0; i < 5; i++){
//     for(var j = 0; j < i; j++){
//         console.log("*");
//     }
// }
// for(var i = 5; i > 0; i--){
//     for(var j = 0; j < i; j++){
//         console.log("*");
//     }
// }


let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}