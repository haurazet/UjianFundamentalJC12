function cekkoin(koin){
    var arr=[25,10,5,1]
    var output=0
    for(i=0;i<arr.length;i++){
        var a=Math.floor(koin/arr[i])
        output+=a
        koin-=(a*arr[i])
    }
    return output
}

console.log(cekkoin(49))//7
console.log(cekkoin(31))//3
console.log(cekkoin(50))//2


// koin sen pecahan [25,10,5,1]
// contoh untuk mendapatkan 31 sen maka dibutuhkan 3 koin yaitu 25 sen,5 sen,dan 1 sen
