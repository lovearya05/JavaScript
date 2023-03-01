// // synchronous functions
// console.log("start");
// function loginUser(email,password,callback){
//     setTimeout(()=>{
//         console.log("now we have data");
//         callback({ userEmail : email})
//     },3000)
// }

// const usr = loginUser('lsing@gmail.com',123456,(user)=>{
//     console.log(user)
// });
// // console.log(user);

// console.log("End")

// var Module = (function() {
//     var privateProperty = 'foo';

//     function privateMethod(args) {
//         console.log("Private Method");
//     }

//     return {

//         publicProperty: '',

//         publicMethod: function(args) {
//             // do something
//             console.log("public method")
//         },

//         privilegedMethod: function(args) {
//             return privateMethod(args);
//         }
//     };
// })();


// const foo = {
//     valueOf : ()=> 4
// }
// console.log(3 + foo)
// console.log(4 * foo);

// var car = "Volvo"

// document.getElementById('root').innerText = "Hello World"
// document.getElementById('root').style.fontSize = '90px'
// document.getElementById('root').style.display = "none"
// document.getElementById('root').style.display = 'block'
// console.log("first")
// document.write("write here")
// window.alert("this is Alert")
// const collection = document.getElementsByClassName("para")
// collection[0].style.backgroundColor = 'red'


// statements, expresssion
// console.log("oasdasd")
// 3425*342-3

// variables


// let, var, const
// const a = 5;
// a = 7;
// console.log(a)

// var a = "Rohan"

// const a = 7;
// a=8;
// console.log(a)

// datatypes
// String
// Number
// BigInt
// Symbol
// undefined
// Boolean
// null
// objects

// String
// " ", ' ',` `
// var a = 'hello" johan';
// console.log(a);
// var v = 6;
// var a = `hello ${v} Johan`;  q`  ```````````````````````````````````````````````````````
// console.log(a)
// console.log(typeof(a))

// Number
// var a = 6782.236782000
// console.log(typeof(a));
// console.log(a);


// let a = 4623786666666427836489123648712364781264786;
// let b = 4623786666666427836489123648712364781264786n;
// let b = BigInt(8478926487235785127846123897491287491273917193)

// console.log(a)
// console.log(b)
// console.log(typeof(a));
// console.log(typeof(b));

// let a = true;//1
// false - 0
// var b = 10 - false;
// console.log(typeof(a));
// console.log(b)

// var t = null
// console.log(t)
// console.log(typeof(t))

// var a = [1,2];
// var a = {
//     a:"44"
// }
// console.log(typeof(a))


//loops 

// for
// while
// do while

// Nested loops
// for(var i=1;i<=3;i++){
//     var str = "";
//     for(var j=3;j>0;j--){
//         str = str + j + " ";
//     }
//     console.log(str);
// }
// process.stdout.write("hello ");
// process.stdout.write("hello ");
// process.stdout.write("hello ");

// var arr = [1,2,3]

// let a= '123'
// let age=17

// console.log(String.fromCharCode(67))
// console.log(a.charCodeAt(0))
// console.log(typeof(Number(a)));
// console.log(Number(a))
// var a = "hel"
// console.log(a.padEnd(7,"x"))



// const a = 7
// a = 9
// console.log(a);

// data types

// Number, String, BigInt, undefined, object, symbol, null, boolean

// " ", '', ``,

// var a = 345678987543212345634567812345678
// var b = 234567890234567894512345678923456n

// var c = BigInt(234567890234567)

// console.log(a)
// console.log(b)
// console.log(c)


// [],{},

// %,#,@

// var a = '#'
// console.log(a.charCodeAt(0));

// operators

// arithmatic, bitwise, conditiona, logical

// +,-,*,**,/,%


// functions

// simple fn, named function , arrow/lamda, anonymous fn

// function a(a){
//     console.log(a)
// }

// a(a)

// const a = function s(){
//     console.log("first")
// }

// const b = a

// b()

// const fn = ()=>{
//     console.log("hfasdh");   
// }
// fn()

// ((a)=>{
//     console.log("hello  here",a)
// })(6)

// function a(z){
//     var y = 3
//     function b(){
//         var x = 10
//         function c(){
//             console.log(x+y+z)
//         }
//         c()
//     }
//     b()
// }
// var z = 10

// a(z)

// function a(x){
//     return function b(y){
//         return (x+y);
//     }
// }

// var ans = a(3)

// console.log(ans(6))

// var a = 10
// var b = 12

// function sum(a){
//     return function b(b){
//         return a+b
//     }
// }

// var ans = sum(a)(b)
// console.log(ans)

// var obj1 = {
//     name : "hello",
//     age : 21,
//     fn : function a(){
//         return this.name
//     }
// }

// var obj2 = {
//     name : "world",
    // __proto__ : obj1
// }


// // console.log(obj2.age)
// // obj1.name = "Rohi"
// console.log(obj2.fn());

// var a = "this is a tutorial this"
// console.log(a)
// a = a.replaceAll("this", "do")
// console.log(a)


// var a = "Ruhi"
// var v = a.matchAll("is")
// console.log(Array.from(v))



// var a = 123 
// a +=""
// // console.log(typeof(a), " ", a);

// var obj1 = {
//     name : "sonam",
//     age : 21,
//     // obj2:{
//     //     name:"komal"
//     // }
// }

// let arr = [1,2,4]
// obj1.map((val)=>{
//     console.log(val)
// })



// for(let val in obj1){
    //     console.log(val, " ", obj1[val])
    // }
    // console.log(obj1?.obj2?.name)
    
    
    // var a = false ?? null ?? 0 ?? 9 ?? null
    // var a = false || 2
    
    // console.log(a)
    
    
    
    
    // console.log("heabcd\rflyylkkyy")
    // var a = 2345678921234567812345678n
    // var b = BigInt(2345678921234567812345678)
    // let x = Number.MIN_VALUE;
    // var arr = [1,2,4,5,67,3]
    // var brr = arr.sort((a,b)=>a-b)
    // console.log(brr)

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 2);
// console.log(citrus)
// console.log(fruits)

// var arr = [10,20,30,70,4,2]
// // const rem = arr.reduce((accu,cv,ci)=>{
// //     return accu-=cv
// // },1000)

// // console.log(rem);
// // console.log(arr);
// const ans = arr.some((val)=>{
//     return val>18
// })

// console.log(ans)

// var a =2 //  10
// var b = 1 // 01

// console.log(a|b) // 00

// var obj1 = {
//     name : "sonam",
//     age : 21,
//     f : function(){
//         return this.name
//     }
//     // obj2:{
//     //     name:"komal"
//     // }
// }
// // const f = ()=>{
// //     console.log(this.name);
// // }
// const obj = {
//     name : "abc",
//     __proto__ : obj1
// }

// const val = obj.f()
// console.log(val)


// classes in js

// class abc {
//     #name = "parot"
//     #age = 20
//     // constructor(name, age){
//     //     this.name  = name;
//     //     let date = new Date();
//     //     console.log(date);
//     //     this.age = date.getFullYear() - age;
//     // }

//     fun(){
//         console.log("name is :", this.#name ,"and age is : ", this.#age)
//     }
//     // fun()

// }
// 'use strict'
// class def extends abc{
//     constructor(quali,country){
//         super("xcx",2000)

//         this.quali = quali;
//         this.country = country;
//     }
//     getDetails(){
//         this.fun()
//         console.log(this.age)
//         // console.log("qualification is : ",this.quali, "country us : ", this.country);
//     }
// }


// let obj = new abc()
// // console.log(obj.name ,obj.age);
// obj.fun()
// // obj1.getDetails();
// // obj1.fun()

// // # private By # within the class
// // static -> className.func

// let a = 6

// let x = this
// console.log(x)


// const obj = {
//     name : "rohan",
//     f : function(){
//         return this.name
//     } 
// }

// const obj1 = {
//     name : 'Divya'
// }

// const ans = obj.f.call(obj1)
// const ans = obj.f.apply(obj1)

// const ans = obj.f.bind(obj1)()
// console.log(ans)



// console.log("%c first", "color: red;");

// 'use strict'

// var x1 = 10

// console.log(x1);

// const p = {
//     f:'A',
//     age : 24,
//     fun : function(){
//         return this.age
//     }

// }


// console.log(p.fun())
// console.log(this.age)

// setTimeout(()=>{
//     console.log("1")
//     setTimeout(()=>{
//         console.log("2")
//         setTimeout(()=>{
//             console.log("3")
//             setTimeout(()=>{
//                 console.log('4');
//             },1000)
//         },3000)
//     },4000)
// },1000)



// console.log(eval('()=>{console.log("hii")}'))


// var str = '({"firstName":"Bill","lastName":"Gates" })';
	
// var obj = eval(str);

// console.log(obj.firstName)

// 'use strict'

// var x
// x = 5

// console.log(x)


// const ans = arr.copyWithin(2,4)
// console.log(ans);


// const arr = [0,1,2,5,2,5,2,8,8,9]
// const obj = {
//     name:'rohan'
//     // name:'rekha'
// }

// const res = new Set()
// const val = res.delete(2)
// console.log(val)
// console.log(res)

// 'use strict'



