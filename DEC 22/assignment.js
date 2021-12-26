//To check the maximum of the numbers in an array

var arr=[];
var i= prompt("Enter first number");
i = parseInt(i);
arr.push(i);

var i= prompt("Enter second number");
i = parseInt(i);
arr.push(i);

var i= prompt("Enter third number");
i = parseInt(i);
arr.push(i);

var max= Math.max(arr[0], arr[1], arr[2]);
console.log(max);
