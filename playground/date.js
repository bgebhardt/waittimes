
let now = new Date();
console.log(now);

// [The definitive guide to JavaScript Dates](https://flaviocopes.com/javascript-dates/)
let y = now.getFullYear();
let d = now.getDate();
let m = now.getMonth();
let h = now.getHours();
let mm = now.getMinutes();
let s = now.getSeconds();

// * Create container
// * year
//   * date
//     * csv for every 5 minutes

let path = y + "/" + y + "-" + padNum(m+1) + "-" + padNum(d);

console.log(path);

// example file name
// 2019-07-14-00:00:00.csv
let fileName = y + "-" + padNum(m+1) + "-" + padNum(d) + "-" + padNum(h) + ":" + padNum(mm) + ":" + padNum(s) ;

console.log(fileName);

// see [Intl.DateTimeFormat - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)
var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
let dateStr = Intl.DateTimeFormat('en-US', options).format(now);


var myNumber = 10;
var formattedNumber = ("0" + myNumber).slice(-2);
var formattedNumber = myNumber.toString().padStart(2,'0');

function padNum(myNumber) {
    // based on [String.prototype.padStart() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
    var formattedNumber = myNumber.toString().padStart(2,'0');

    return formattedNumber;
}

