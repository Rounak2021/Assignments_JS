// Write a program to take an input from the user (num) and check whether it is a prime number or not.


var num = prompt("Enter any number");
var prime= true;

    for (var i = 2; i < num; i++) {
        if (num % i == 0) {  // --->Here it checks that it does not give remainder, hence not prime
            prime= false;
            break;
        }
    }
    if (prime){
        alert("Prime number");
    } else {
        alert("Not a prime number");
    }

console.log(num); //To print the number
