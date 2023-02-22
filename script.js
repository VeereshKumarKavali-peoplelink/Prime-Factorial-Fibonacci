
let primeEl = document.getElementById("primeInput");
let factorialEl = document.getElementById("factorialInput");
let fibonacciEl = document.getElementById("fibonacciInput");
let primeButton = document.getElementById("primeButton");
let armstrongEl = document.getElementById("armstrong");
let patternEl = document.getElementById("pattern");
let patternContainerEl = document.getElementById("patternContainer");



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



function clickedArmstrong(){
    let inputValString= document.getElementById("userInput").value;
    let length = inputValString.length;
    let sum = 0;
    for (let num of inputValString){
        sum += parseInt(num)**length;
    }

    if (sum === parseInt(inputValString)){
        armstrongEl.textContent = `${inputValString}  is an Armstrong Number`;

    }else{
        armstrongEl.textContent = `${inputValString} is not an Armstrong Number`;
    }
}


function clickedPattern(){
    patternContainerEl.textContent = "";
    let inputVal = parseInt(document.getElementById("userInput").value);


    let paragraphEl;
    function createParagraphEl(){
        paragraphEl = document.createElement("p");
        patternContainerEl.appendChild(paragraphEl);
    }


   
    let result = "";
    let unicode = 97;
    for (i=0; i < inputVal; i++){

        if (i === 0){
            result = result + String.fromCharCode(unicode);
            createParagraphEl();
            paragraphEl.textContent = result;
        }else if (i>=1 && i%2 !== 0){
            result = "";

            for (num=1; num <= i+1; num++){
                result = result + " " + num;
            }

            createParagraphEl();
            paragraphEl.textContent = result;

        }else{
            unicode += 1;

            result=""; 
            result = result + (String.fromCharCode(unicode) + " ").repeat(i);

            createParagraphEl();
            paragraphEl.textContent = result;
        } 
    }

}






document.getElementById("userInput").addEventListener("keyup", (event)=>{
    if (event.target.value === "") {
        primeEl.textContent = "";
        factorialEl.textContent ="";
        fibonacciEl.textContent = "";
        armstrongEl.textContent= "";
        patternContainerEl.textContent = "";
    }
})