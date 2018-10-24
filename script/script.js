'use strict';

var o = { x: 1, y: 2, z: 3 };
var a = [];
var i = 0;

for (a[i++] in o) {
    console.log(a);
}
