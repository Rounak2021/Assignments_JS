// To find the factorial of a number




const number = parseInt(prompt('Enter a number: '));
if (number === 0) {   //To check the number is neutral or not
    console.log(" The factorial ofthe number is 1 ");
}

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log("The factorial of the number is: " +fact);
}