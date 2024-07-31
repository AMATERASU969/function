function count(){
    
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");

    while (a <= b){
        setInterval(() => {
            console.log(a);
            a += 1;
        },1000)

    }

}


count();