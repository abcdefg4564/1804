/**
 * Created by web-01 on 2018-04-08.
 */
console.log("fun1:")
var arr = [60,70,80,90,50];
for(var i =0;i<arr.length;i++){
    console.log(arr[i])
}
console.log("fun2:")
for(var i in arr){
    console.log(arr[i])
}
console.log("fun3:")
for(var i of arr){
    console.log(i)
}
