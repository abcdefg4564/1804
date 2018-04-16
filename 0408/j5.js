/**
 * Created by web-01 on 2018-04-08.
 */

for(var i=2;i<=100;i++){
    var n = 0;
    for(var j = 1; j<=i;j++){
        if(i%j==0){
            n++;
        }
    }
    if(n==2){
        console.log(i)
    }
}