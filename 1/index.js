

function even_odd(){
    a = +prompt("Введите число: ");
    if (a == ""){
        console.log("Введите число")
    }
    else{
        if (Number.isNaN(a)){
            console.log("Упс, кажется, вы ошиблись")
        }
        else if (a % 2 == 0){
            console.log("Четное")
        }
            else {
            console.log("Нечетное")
        }
    }
    
}


even_odd();