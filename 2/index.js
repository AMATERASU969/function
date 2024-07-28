function SimCom(a){
    if ( a === 0 || a === 1){
        return console.log("Число 0 или 1 не являются простым или сосатвным");
    }
    else if (a > 1000){
        return("Введены неверные данные");
    }
    else {
        for (let i = 2; i < a; i++){
            if (a % i === 0){
                return console.log("Число " + a + " составное");
            }
        }
        return console.log("Число " + a + " простое");
    }
}
SimCom(7);