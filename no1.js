const Factorial=(num)=>{
    var output=1
    for(i=num;i>=1;i--){
        output=output*i
    }
    return output
}
console.log(Factorial(5))//120
console.log(Factorial(4))//24
console.log(Factorial(10))//3628800
