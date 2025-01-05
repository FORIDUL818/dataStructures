class User {
    constructor(fullName,email,password,blood) {
         this.Name=fullName;
         this.email=email
         this.password=password;
         this.blood=blood
    }
 
   set fullName(name){
    this.Name=name;
   }
   get fullName(){
    return this.Name;
   }
   set myEmail(email){
    this.email=email
   }
   get myEmail(){
    return this.email;
}
 set Pass(password){
     this.password=password;
 }
 get Pass(){
     return this.password;
    }
    
    set myblood(blood){
     this.blood=blood;
 }
 get myblood(){
     return this.blood;
    }
   
 }

const mydata=new User();
mydata.Name="Foridul Islam";
mydata.myEmail="foridulislamdise880@gmail.com"
mydata.setPass="123245545";
mydata.myblood="0+";
console.log(mydata.Name,mydata.myEmail,mydata.setPass,mydata.myblood);


