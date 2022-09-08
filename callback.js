// function register(callback){
//     setTimeout(()=>{
//         console.log("User Registerd Successfully")
//         callback();
//     },4000)

// }
// function email(callback){

//     setTimeout(()=>{
//         console.log("Email Registered Successfully")
//         callback();
//     },2000)
    
// }
// function login(callback){
//     setTimeout(()=>{
//         console.log("User Logged In Successfully")
//         callback();
//     },5000)
  
// }
// function getData(callback){
//     setTimeout(()=>{
//         console.log("User Get Data successfully")
//         callback();
//     },7000)
   
// }

// function viewData(){

//     setTimeout(()=>
//     {
//         console.log("View user Data Successfully")
//         //callback();
//     },2000)
   
// }

// console.log("Other operations")


// //****************Call Back Hell Mechanism************************
// register(function(){
//     email(function(){
//         login(function(){
//             getData(function(){
//                 viewData();
//             });
           
//         });
        
//     });
    
// });

// const i=1

// while(i<=20)
// {
//     console.log(i)
//     i++;
// }

// let a=20
// function test(){
//    let b=30
//     console.log(a)
// }
// test();
// console.log(b)

function a(){}
function b(a){}