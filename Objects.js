let obj={
    Name:"Foridul islam",
    email:"foridulislamdise880@gmail.com",
    password:"12345678",

    fulldetails:function() {
        return `my details is
         Name: ${this.Name}
         email: ${this.email}
         password: ${this.password}
         password: ${this.blood}`
    }
};
obj.blood="0+"
console.log(obj.fulldetails());

let obj2=new Object();
obj2.myName="foridul Islam"
for (let i in obj2) {
    console.log(obj2[i])
    
}


function Obj() {
 this.Name="Foridul";
 this.lName="Islam";
 this.email="foridulilslamdise880@gmail.com";
 this.password="ldjfldjfldf";

//  return this.Name + "" + this.email + " " + this.password + " " +this.lName
}
let data=new Obj();
console.log(data);

// Object write way 
//  let obj={}
// let contructionObj=new Object();
// function constarctionObj(){
//    this.Name="Foridul";
//}
// let obj=new contructionObj();
// class objClass {
  // constructor(){
   // this.Name="Foridul" 
//}
// data(){
  // method
//}
// }
obj={
    Name:{
        myName:{
            nickName:{
                name:"Foridul"
            }
        }
    }
}
let data2 = obj.Name.myName.nickName.name;
console.log(data2)




