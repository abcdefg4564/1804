/**
 * Created by web-01 on 2018-04-08.
 */
const  PI = Math.PI;
function getSize(r) {
    var s = PI*Math.pow(r,2);
    return s;
}
function getPerimiter(r) {
    var l = 2*PI*r;
    return l;
}
exports.PI = PI;
exports.getSize = getSize;
exports.getPerimiter = getPerimiter;
