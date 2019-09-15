var message;
var number;
function log(message, number) {
    console.log(message, number);
}
var kamciu = 'kamil';
var ColorRed = 0;
var ColorBlue = 1;
var ColorBlack = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Black"] = 2] = "Black";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
;
var backgroundcolor = Color.Red;
log(kamciu, 23);
