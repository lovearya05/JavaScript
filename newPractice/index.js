// // synchronous functions
// console.log("start");
// function loginUser(email,password,callback){
//     setTimeout(()=>{
//         console.log("now we have data");
//         callback({ userEmail : email})
//     },3000)
// }

// const { forEach, invoke } = require("lodash");

// const { set } = require("lodash")



// function

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





// object 

// var obj1 = {
//     name : "hello",
//     age : 21,
//     fn : function a(){
//         return this.name
//     }
// }

// console.log(obj1.fn())

// var obj2 = {
//   name : "world",
//   __proto__ : obj1
// }


// console.log(obj2.fn())

// console.log(obj2.age)
// obj1.name = "Rohi"
// console.log(obj2.fn());


// var obj1 = {
//     name : "sonam",
//     age : 21,
//     obj2:{
//         name:"komal"
//     }
// }




// for(let val in obj1){
//     console.log(val, " ", obj1[val])
// }
// console.log(obj1?.obj2?.name)


var a = false ?? null ?? 0 ?? 9 ?? null
var a = false || 2

console.log(a)




//  Array

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
// #name = "parot"
// #age = 20
// constructor(name, age){
//     this.name  = name;
//     let date = new Date();
//     console.log(date);
//     this.age = date.getFullYear() - age;
// }

// fun(){
//     console.log("name is :", this.#name ,"and age is : ", this.#age)
// }
// fun()

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

// console.log(obj.firstName)


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



// const axios = require('axios')
// const data = async()=>{
//     await axios.get('https://randomuser.me/api/')
//     .then((res)=>{
//         console.log(res.data.results[0].name.first," ", res.data.results[0].name.last)
//         console.log(res.data.results[0].email)
//         console.log(res.data.results[0].location.street.name)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

//     // await fetch('https://randomuser.me/api/').then((res)=>res.json()).then((re)=>console.log(re))

// }


// data();












// const a =  Math.random()*(max-min)+min
// const a =  Math.random()*(20-10)+10

// console.log(parseInt(a))


// readline-sync 

// const obj = require('readline-sync')
// const n = obj.questionInt("Enter Value")
// console.log(typeof(n))
// console.log(n)


// let date = new Date();


const userMethod = {
    about : function(){
        return `name : ${this.name}`
    },
    is18 : function(){
        return this.age >=18
    },
    sing : function(){
        return 'la la la oh ho hooo'
    }
}

// function createUser(name, age, email, address){
//     const user = Object.create(userMethod)
//     user.name = name
//     user.age = age
//     user.email = email
//     user.address = address
//     return user;
    
//     // const user = {}
//     // user.about = userMethod.about
//     // user.is18 = userMethod.is18
//     // user.sing = userMethod.sing
//     // return user
// }

// const user = createUser('Rohan',14,'hii@gmail.com','mohali')
// const user1 = createUser('Nikita',18,'hii@gmail.com','mohali')

// console.log(user.about())






// new keyword

// function createUser(name, age, email, address){
//     this.name = name
//     this.age = age
//     this.email = email
//     this.address = address
// }

// createUser.prototype.about = function(){
//     return `name : ${this.name} age : ${this.age}`
// }

// const user = new createUser('Rohan',14,'hii@gmail.com','mohali')
// const user1 = new createUser('Nikita',18,'hii@gmail.com','mohali')

// console.log(user1.about())






// class 

// class createUser{
//     constructor(name, age, email, address){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.address = address;        
//     }

//     about(){
//         return `name : ${this.name} age : ${this.age}`
//     }

//     is18(){
//         return this.age>=18
//     }
// }


// const user = new createUser('Rohan',14,'hii@gmail.com','mohali')
// const user1 = new createUser('Nikita',18,'hii@gmail.com','mohali')

// console.log(user1.about())
// console.log(Object.getPrototypeOf(user1))


// class Animal {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
// }


// class Dog extends Animal {
//     constructor(name, age, speed) {
//         super(name, age)
//         this.speed = speed
//     }

//     run() {
//         return `${this.name} is run at ${this.speed}`
//     }
// }

// const tommy = new Dog('tommy', 12, 45)

// // console.log(tommy.eat())
// // console.log(tommy.run())






// array methods

// var arr = [10,6,9,3,4,5,6]
// var arr = [10,6,9,3,4,5,6]

// console.log(arr)
// arr.push(60)
// arr.pop()
// const ans = arr.join('_')
// const ans = arr.concat(arr)
// const ans = arr.copyWithin(1,4,6)

// console.log(arr)
// const ans = arr.fill("hi",1,3)
// const ans = arr.find((val)=>{
//     if(val>3) return true
// })

// const ans = arr.every((val)=> val>2 )
// const ans = arr.findIndex((val)=> val==3)

// console.log(arr)



// var arr = [3,5,1,5]

// console.log(arr[3][3][1])

// const ans = arr.flat(10)

// const ans = arr.flat(10).includes(8)
// const ans = arr.flat(10).indexOf(3)

// console.log(arr)

// console.log(ans)


// const arr = ["a", "b", "c", "d", "e"];
// const arrIter = arr.entries()

// const arrIter = arr.values()

// console.log(arrIter.next()); // a
// console.log(arrIter.next()); // b
// console.log(arrIter.next()); // c
// console.log(arrIter.next()); // d
// console.log(arrIter.next()); // e
// console.log(arrIter.next()); // e




// const obj = {
//     name : 'Rohan',
//     age : 21,
//     Class : 'b.tech'
// }

// console.log(obj)
// delete obj.age
// console.log(obj)



// console.log(obj.age)

// const lodash = require('lodash')

// const obj2 =  obj
// console.log(obj===obj2)

// console.log(obj2)

// console.log("deep Copy")
// const obj3 = lodash.cloneDeep(obj)

// console.log(obj===obj3)
// console.log(obj3)


// const obj = {
//     name : 'Rohan',
//     age : 21,
//     Class : 'b.tech',
//     getDetails : function(){ //getter fn
//         return `my name is ${this.name} age is ${this.age} class : ${this.Class}`
//     },

//     setVal : function(name,age,Class){ //setter
//         this.name = name,
//         this.age = age,
//         this.Class = Class
//     }
// }

// obj.name = 'Komal'
// obj.setVal('Komal',23,'CSE')
// console.log(obj.getDetails())


// const obj1 = {
//     name : 'Jyoti',
//     age : 20,
//     fn : function(){
//         console.log(`name ${this.name} ${this.age}`)
//     }
// }


// const obj2 = {
//     name : 'Neha',
//     age : 21,
//     __proto__ : obj1
// }

// console.log(obj2)










// iterator -> for,while 


// const arr  = [
//     {name : 'kamal'},
//     {name : 'Rohan'},
//     {name : 'Deepika'},
// ]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.map((val)=>{
//     console.log(val)
// })

// const obj = {
//     name : 'rohan',
//     age : 32,
//     hobby : 'cricket',

//     fn : function() {
//         return `name : ${this.name} age : ${this.age}`
//     }

// }

// const obj1 = {
//     name : 'rohit',
//     age : 22,
//     55 :90
// }

// const ans = obj.fn.apply(obj1)
// console.log(obj.fn())
// console.log(ans)

// console.log(obj.fn())

// const ans = JSON.stringify(obj1)
// console.log(ans)

// console.log(JSON.parse(ans))

// {"name":"rohit","age":22}

// const userDetails = {
//     about : function() {
//         return `name is :${this.name}`
//     },

//     sing : function(){
//         return 'la ha ya'
//     },

//     is18 : function(){
//         return this.age >=18
//     }
// }

// function abc(name,age, mob){
//     // const user = {}
//     const user = Object.create(userDetails)
//     user.name = name;
//     user.age = age;
//     user. mob = mob;

//     return user

// }


// // abc.firsName = 'heena'
// // call, apply self call
// // bind - > call ni kreta

// const obj = abc('Radha', 44, 456789)

// // console.log(obj)
// // const obj2 = userDetails.about.bind(obj)






// const userDetails = {
//     about : function() {
//         return `name is :${this.name}`
//     },

//     sing : function(){
//         return 'la ha ya'
//     },

//     is18 : function(){
//         return this.age >=18
//     }
// }


// new keyword use

// function abc(name,age, mob){
//     this.name = name;
//     this.age = age;
//     this. mob = mob;
// }

// abc.prototype = userDetails

// const obj = new abc('Radha', 44, 456789)
// console.log(obj.about())


// iterators 

// const arr = [1,2,3]
// arr.name = 'yippy'
// arr.say = 'huhooo'
// console.log(arr.name)
// console.log(arr.say)
// console.log(arr)

// var i=0
// function numbers(){
//     const arr = [1,2,3]
//     if(i<arr.length){
//         return {val: arr[i++], done : true}
//     }else{
//         return {val: -1, done : false}
//     }
// }

// console.log(numbers())
// console.log(numbers())
// console.log(numbers())
// console.log(numbers())

// function numbers(){
//     const arr = [1,2,3]
//     var i=0
//     return {
//         next : function(){
//             if(i<arr.length){
//                 return {val: arr[i++], done : true}
//             }else{
//                 return {val: -1, done : false}
//             }
//         }
//     }

// }

// const iterator = numbers()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())


// const arr = [1,2,45,6]

// const iterator = arr.values()

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())



// pet adoption
// book review app
// charity donation
// recipe sharing and feedback
// virtual event platform
// music colabaration
// online medical consultant
// fashion tips provide
// remote job board
// fitness plnning app





// constructor function
// 1st way 

// const result = {
//     sayResult : function(){
//         return `${this.name} is ${this.res}`
//     }
// }

// // console.log(result.sayResult())

// function exam(name1,res1,age1){
//     const obj = {}
//     obj.name = name1
//     obj.res = res1
//     obj.age = age1
//     return obj
// }

// const studen = exam('bobby', 'pass', 43)
// const studen2 = exam('lila', 'pass', 23)
// studen.__proto__ = result
// studen2.__proto__ = result

// console.log(studen.sayResult())
// console.log(studen2.sayResult())


//2nd way

// const result = {
//     sayResult : function(){
//         return `${this.name} is ${this.res}`
//     }
// }

// function exam(name1,res1,age1){
//     const obj = Object.create(result)
//     obj.name = name1
//     obj.res = res1
//     obj.age = age1
//     return obj
// }

// const studen = exam('bobby', 'pass', 43)
// const studen2 = exam('lila', 'pass', 23)

// console.log(studen.sayResult())
// console.log(studen2.sayResult())



//3nd way

// const result = {
//     sayResult : function(){
//         return `${this.name} is ${this.res}`
//     }
// }

// function exam(name1,res1,age1){
//     this.name = name1
//     this.res = res1
//     this.age = age1
// }

// exam.prototype = result

// const studen = new exam('bobby', 'pass', 43)
// const studen2 = new exam('lila', 'pass', 23)


// console.log(studen.sayResult())
// console.log(studen2.sayResult())




// var a = 0

// const res = a || 9
// const res1 = a ?? 9

// console.log(res)
// console.log(res1)


// const obj = {
//     name : 'Rohan',
//     res : "pass",
//     hobbies : {
//         mornigHobby : "walking",
//         evgHobby : 'playing',
//         // watching : 'video',
//         nightHobby : {
//             using : "mobile",
//             watching : "TV"
//         }
//     }
// }

// console.log(obj?.hobbies?.nightHobby?.watching)

// function* fn(index){
//     while(index<2){
//         console.log(index, "aaaaa")
//         yield index
//         console.log(index,"iiiii")
//         index++
//     }
// }

// const iter = fn(0)

// console.log(iter.next())
// console.log("-------------------------------")
// console.log(iter.next())
// console.log(iter.next())
// // console.log(iter.next())


// function* abc(){
//     yield 'hii'
//     yield 'bye'
//     yield 'go'
//     yield 'run'
// }


// const iter = abc()

// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())




//  class solve{
//     constructor(name,age){
//         this.name = name
//         this.age = age        
//     }

//     about = function(){
//         return `name is :${this.name} age is : ${this.age}`
//     }

//     is18 = function(){
//         return 18<=this.age
//     }

//  }

//  const obj = new solve('pargat', 20)
//  const stu1 = new solve('Ankit', 24)

// //  console.log(obj)

// console.log(obj.is18())
// console.log(obj.about())

// stu1.name = 'Lalit'
// stu1.hobby = 'Dance'

// console.log(stu1)

// for(let x in obj){
//     console.log(obj[x])
// }


// class details{
//     #hobby = 'dance'
//     constructor(name,sub1,sub2,sub3,sub4){
//         this.name = name
//         this.sub1 = sub1
//         this.sub2 = sub2
//         this.sub3 = sub3
//         this.sub4 = sub4
//     }  
//     tell(){
//         return `${this.#hobby}`
//     }
//     setter(name){
//         this.name = name
//     }
//     getter(){
//         return this.name
//     }
// }

// class student extends details {
//     constructor(name,sub1,sub2,sub3,sub4){
//         super(name,sub1,sub2,sub3,sub4)
//     }

//     result(){
//         console.log('name is :', this.name)
//         console.log('Avg Marks : ', (this.sub1+this.sub2+this.sub3+this.sub4)/4)
//     }

//     about(){
//         console.log('name : ',this.name)
//     }

//     static hii(){
//         console.log('static---')
//     }

// }

// const s1 = new student('yubin',55,77,22,97)
// const s2 = new student('rohan',75,77,22,37)
// const s3 = new student('pinku',55,04,47,97)

// s1.setter('kamal')
// console.log(s1.tell())

// s1.about()
// s1.result()
// s2.result()
// s3.result()



// const arr = [1,3,2,3]

//  const ans = arr.reduce((acc,cv,idx)=>{

//     if(cv===idx){
//         return acc+cv
//     }

//     return acc

//     // if(cv%2===0){
//     //     return acc + cv
//     // }else{
//     //     return acc - cv
//     // }

// },0)

// console.log(ans)


// const emp = [200,400,200,50,200]

// var total = 2000

// const rem = emp.reduce((acc,cv)=>{
//     return acc - cv
// },total)

// console.log(rem)

// map , reduce ,filter higher order fn 


// const arr = [1,2,3]

// const iter = arr.entries()
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())


// var i = 0
// function entries(){
//     if(i<arr.length){
//         return {value : arr[i++], done : 'false'}
//     }else{
//         return {value : undefined, done : 'true'}
//     }
// }

// console.log(entries())
// console.log(entries())
// console.log(entries())
// console.log(entries())
// console.log(entries())

// const arr = [1,2,3,8]

// const ans = arr.some((cv)=> cv<5)
// console.log(ans)



// const ele = document.getElementById('para')

// ele.innerText = 'yoooooooo'
// ele.innerHTML = 'yoooooooo'
// ele.style.color = 'red'
// ele.style.fontSize = '30px'
// console.log(ele.innerHTML)

// document.title = 'Home'
// console.log(document.title)


// const colors = ['red', 'green', 'black', 'blue','yellow']

// const ele = document.getElementsByClassName('para')

// console.log(ele)

// var i = 0

// for(let e of ele){
//     e.style.color = colors[i++]
//     i %= colors.length
// }

// for(let i=0;i<ele.length;i++){
//     if(i%2==0){
//         ele[i].style.color = 'red'
//     }else{
//         ele[i].style.color = 'green'
//     }
// }


// const ChangeImage = function(){
//     const img = document.getElementById('img')
//     const ht = img.style.height
//     const wd = img.style.width

//     console.log(ht, wd)

//     img.src = './d2.webp'
//     img.style.height = ht
//     img.style.width = wd

// }


// var set1 = new Set([3,5])

// set1.add(4)
// set1.add(6)
// set1.add(6)
// set1.add(6)
// set1.add(6)

// // const t = set1.delete(6)
// const t = set1.has(633)

// console.log(t)

// console.log(set1)

// set1.forEach((val)=>{
//     console.log(val)
// })

// const iter = set1.values()

// console.log(set1.size)

// while(true){
//     console.log(iter.next())
// }

// const hobby = 'hby'

// const mp = new Map([[hobby, 'dance'],['class', 'cse']])

// mp.set('arr' , ['name' , 'komal'])
// mp.set('name' , 'Alka')
// mp.set('age', 44)

// console.log(mp)


// console.log(mp.get('arr'))

// mp.delete('arr')

// console.log( mp.has('age'))

// console.log(mp.get('arr') ? mp.get('arr') : '')

// mp.forEach((val, k, m)=>{
//     console.log(val, k, m)
// })

// const iter = mp.entries()


// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// console.log(mp.size)

// const date = new Date()

// console.log(date.toLocaleTimeString())

// function change(){
//     const d1 = document.getElementById('d1')
//     const d2 = document.getElementById('d2')


//     d2.innerHTML = d1.innerHTML
//     d1.innerHTML = temp.innerHTML


//     console.log(d1)
// }



// const timeout = setTimeout(() => {
//     console.log("hiii")
// }, 3000)



// setTimeout(()=>{
//     clearTimeout(timeout)
// },2000)


// var cnt  = 0
// var sec = 0
// var min = 0
// var hrs = 0
// const inter = setInterval(()=>{
//     if(cnt===1000){
//         sec++
//         if(sec===60){
//             min++;
//         }
//         sec = sec%60
//         cnt = 0
//     }

//     console.log(`min : ${min} sec: ${sec} ms:${cnt}`)
//     cnt++;
// },0)


// setTimeout(()=>{
//     clearInterval(inter)
// })



// try{

//     const num = parseInt( Math.random()*11 )

//     if(num>5){
//         throw 'Number is greater then 5'
//     }
//     console.log('number value is :', num)

// }catch(err){


//     console.log(err +"--------")


// }

// const obj = require('readline-sync')

// const num = obj.questionInt('enter age ')

// try{

//     if(num<18){
//         throw 'Under Age'
//     }
//     console.log('Passed age :', num)

// }catch(err){

//     console.log(err +"--------")
// }finally{
//     console.log('executed successfully')
// }


// const url = 'https://641168dbe96e5254e2d49f0f.mockapi.io/test/api/userApi'


// try{
//     // console.log('object')
//     fetch(url)
//     .then((res)=> res.json())
//     .then(data => console.log(data))

// }catch(e){
//     console.log(e)
// }


// async await 

// function QuestionsMarks(str) { 
//   res = false;
//   for(let i=0; i<str.length; i++){
//       for(let j=i+1; j<str.length; j++){
//           if(Number(str[i]) + Number(str[j])=== 10){
//               res = true;
//               if(str.slice(i,j).split("?").length -1 < 3){
//                   return false;
//               }
//           }
//       }
//   }
//   return res;
// }
 

//   console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); // should return true
//   console.log(QuestionsMarks("aa6?9"));


// for(let i=1;i<=9;i++){
//     for(let j=1;j<=9;j++){
//         if(i==5 || i+j==6 || j-i==4 || j==5 && i>5){
//             process.stdout.write('* ')
//         }else{
//             process.stdout.write('  ')
//         }
//     }

//     console.log()
// }


