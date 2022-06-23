 // ways to write in JS
 console.log("Hello World")
 // alert("Me")
 // document.write("this is document write")
 
 
 // javaScript console API 
//  console.warn("This is warning")
//  console.error("this is an error")
 // console.clear()

//  var num1 = 10 ;
//  var num2 = 20;

//  console.log(num1+num2, "first program")

 // objects
 var marks = {
     ravi: 58,
     aman:85,
     rajesh:99,
 }

//  console.log(marks)

 //boolean
//  var a=true;
//  console.log(a);


// var und = undefined;
// var und1;
// console.log(und);
// console.log(und1);

// var nl = null;

// console.log(nl);


// function sum(a,b){
//     return a+b;
// }

// s1 = sum(55,99);

// console.log(s1);

// var arr = [1,2,3,4,5,6,7];

// arr.forEach(function(ab){ console.log(ab) })

var mydate = new Date();
// console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getMonth());
// console.log(mydate.getHours());
// console.log(mydate.getMinutes());

let ele = document.getElementsByClassName("container");
// let mele = getElementById('click');
console.log(ele);
// console.log(mele);

ele[0].classList.add("bg-primary")