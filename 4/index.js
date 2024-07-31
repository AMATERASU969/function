function count(a, b){   
    let intervalId = setInterval(function() {
        console.log(a);
            if (a === b){  
                clearInterval(intervalId);
            }
            else{   
                a++;
            }
    }, 1000);
}

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
count(a, b);
