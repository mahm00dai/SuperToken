var Calculess = require('calculess');
var Calc = Calculess.prototype;

function sin(x) {
    return Math.sin(x);
}

console.log(Calc.integral(0, Math.PI, sin, 5).toFixed(6)); // 1.9337655980928052
Calc.integral(0, Math.PI, sin, 10); // 1.9835235375094546
Calc.integral(0, Math.PI, sin, 100); // 1.999835503887445
Calc.integral(0, Math.PI, sin, 1000); // 1.9999983550656886
console.log(Calc.integral(0, Math.PI, sin, 10000).toFixed(6));