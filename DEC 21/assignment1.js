//To check which number is the least of the three numbers

var a=prompt('Enter the First Number');
var b=prompt('Enter the Second Number');
var c=prompt('Enter the Third Number');
if(a<=b && a<=c) {
 console.log("a is the least of all the three numbers");
}else if(b<=a && b<=c){
 console.log("b is the least of all the three numbers");
}else{
 console.log("c is the least of all the three numbers");
}
