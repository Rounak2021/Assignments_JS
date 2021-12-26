//Write a program to print all even numbers less than or equal to n (n is the user input which we will take using prompt)

var a=prompt("Enter the range of even numbers you want to use");
for(i=0; i<=a; i=i+1){
  if(i%2==0){
   console.log(i);
}
}