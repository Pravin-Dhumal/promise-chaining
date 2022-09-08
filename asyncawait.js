function register(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //return reject("Some eror occured")
            console.log("User Registerd Successfully")
          resolve();
        },4000)
    
    })
    
}
function email(){
return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Email Registered Successfully")
        resolve();
    },2000)
})
    
    
}
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("User Logged In Successfully")
            resolve();
        },5000)
      
    })
    
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("User Get Data successfully")
            resolve();
        },7000)
       
    })
}
    
    


function viewData(){
return new Promise((resolve, reject) => {
    setTimeout(()=>
    {
        console.log("View user Data Successfully")
        resolve();
    },2000)
   
})
}
    

console.log("Other operations")


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
async function authenticate(){
    try{
       await  register();
       await email();
       await login();
       await getData();
       await viewData();
                     
      
    }
    catch(err){
        console.log("Something error occured")
        // throw new Error();
    }
}
authenticate().then(()=>{
    console.log("All Clear.You are ready to go")
})
// .catch(()=>{
//     console.log("Error",err)
// })







// register()
// .then(email).
// then(login).then(getData)
// .then(viewData)
// .catch((err)=>{
// console.log("Error:",err)
// })