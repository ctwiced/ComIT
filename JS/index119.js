const data = [42, true, function() {return 'The meaning of life is: '}];

if (data[1]== true) {
    console.log(data[2]() + data[0]); //What this is doing is it's calling the function which is in position 2 in the array and '()' means we are executing the function, and then getting the first item '0' from the array whcih is 42
}