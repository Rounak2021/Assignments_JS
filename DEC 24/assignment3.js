//To check a number is a perfect square or not

var a=prompt("");
var flag=0;
for(var i=1; i<a;i=i+1){
   if(a%i==0 && a/i==i){
     flag=1;
     break;
   }
}
if(flag==1){
   alert("It is a Perfect Square Number");
}else{
    alert("It is not a Perfect Square Number");
}