"use strict";
exports.__esModule = true;
var seatChioce;
(function (seatChioce) {
    seatChioce[seatChioce["aisle"] = 0] = "aisle";
    seatChioce[seatChioce["middle"] = 1] = "middle";
    seatChioce[seatChioce["window"] = 2] = "window";
})(seatChioce || (seatChioce = {}));
function mySeat() {
    console.log(seatChioce.aisle);
}
mySeat();
