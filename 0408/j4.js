/**
 * Created by web-01 on 2018-04-08.
 */
var path = "/login";

if (path == "/index") {
    function a() {
        console.log("这是index...")
    }
    a();
} else if (path == "/search") {
    function b() {
        console.log("这是search...")
    }
    b();
} else if (path == "/login") {
    function c() {
        console.log("这是login...")
    }
    c();
}

switch (path) {
    case "/index":
        function a() {
            console.log("这是index...")
        }
        a()
        break;
    case "/search":
        function b() {
            console.log("这是search...")
        }
        b()
        break;
    case "/login":
        function c() {
            console.log("这是login...")
        }
        c();
        break;
}