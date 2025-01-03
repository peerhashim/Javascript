const MyNum = new Number(100.56);
console.log(MyNum);
console.log(MyNum.toString().includes('2'));
console.log(MyNum.valueOf());
console.log(MyNum.toFixed());
console.log(MyNum.toLocaleString());
console.log(MyNum.toPrecision());
let randArr =[];
for(let i = 0;i < 1000;i++){
    let randNum =Math.floor((Math.random()*100)+1);
    randArr.push(randNum);
    console.log(`Random Number${i} : ${randNum}`)
}
console.log(`Index of 1 is ${randArr.indexOf(1)}`) ;

