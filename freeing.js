function frezzingPoint(temp){
    if(temp<=0){
        return "frezzing Point";
    }else{
        return "Above frezzing";
    }
}
console.log(frezzingPoint(-5));