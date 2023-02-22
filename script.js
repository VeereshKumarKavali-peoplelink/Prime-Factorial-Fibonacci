
let primeEl = document.getElementById("primeInput");
let factorialEl = document.getElementById("factorialInput");
let fibonacciEl = document.getElementById("fibonacciInput");
let primeButton = document.getElementById("primeButton");




primeButton.onclick = function(){
    primeEl.textContent = "";
    let inputVal = parseInt(document.getElementById("userInput").value);
    let factors = 0
    for (let i=2; i < inputVal; i++){
        if (inputVal%i === 0){
            factors += 1;
        }
    }   
    if (factors === 0 && inputVal>=2){
        primeEl.textContent = `${inputVal} is a prime number`;
    }else{
        primeEl.textContent = `${inputVal} is not a prime number`;
    }
    

}


function clickedFactorial(){
    factorialEl.textContent="";
    let inputVal = parseInt(document.getElementById("userInput").value);
    let product = 1;
    for (let i = 1; i<=inputVal; i++){
        product = product * i;
    }

    factorialEl.textContent = product;
}



function clickedFibonacci(){
    fibonacciEl.textContent = "";

    let inputVal = parseInt(document.getElementById("userInput").value);
    function fibonacci(n){
        if (n <= 1){
            return n;
        }

        return fibonacci(n-1) + fibonacci(n-2);

    }

    let result = fibonacci(inputVal);
    fibonacciEl.textContent = result;
}

