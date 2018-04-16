/**
 * Created by web-01 on 2018-04-08.
 */
var str = "";
for(var i=1;i<=9;i++){
    for(var j=1;j<=i;j++){
        var s = i*j;
       str += i + "*" + j+" = "+s +"; ";
    }
    str+="\r\n";
}
console.log(str)