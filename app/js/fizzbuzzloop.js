var x = 1;
var max = 20;
var result;

for (var i = 1; i <= max; i += 1) {
     
     if (x % 15 === 0) {
    result = console.log("fizzbuzz");
}

else if (x % 3 === 0) {
    result = console.log("fizz");
}


else if (x % 5 === 0) {
    result = console.log("buzz");
}

else {
    result = x}
    
}