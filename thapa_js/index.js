// console.log("hello World");
// let arr = [25,36,33,49];
// // let ans = arr.map((curEle)=> Math.sqrt(curEle))
// let ans = arr.map((curEle)=> curEle>25?curEle:0)
// console.log(ans);



// let arr = [2,3,5,6,7];
// let ans = arr.map((curEle)=> curEle*2).filter((curEle)=>curEle>10)
// console.log(ans);



let arr = [2,3,5,6,7];
let ans = arr.map((curEle)=> curEle*2).filter((curEle)=>curEle>10).reduce((accumulator,curEle)=> accumulator+=curEle)
console.log(ans);