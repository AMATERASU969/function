const returnX = (x,n) => {
    let i = 1;
    let getX = 1;
    if (i === n){
        return x;
    }
    else{
        while (i <= n){
            getX = getX * x;
            i++;
        }
    }
    console.log(getX);
    
}
returnX(3, 10);