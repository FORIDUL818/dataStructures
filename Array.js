// what is array in javaScript?

// An array is a data structure used to store a collection of items (elements) of the same type in a contiguous memory location. In JavaScript, arrays are more flexible than in many other languages, as they can hold elements of different types (e.g., numbers, strings, objects).
            //200,  204,208,212,116
let arr=[10,20,30,40,50,60,40,53,334,33,55,];
// itaration 
arr.map((item)=>{
    if (item===arr[0]) {
        console.log( " item value", item);
    } 
});

for (let i = 0; i < arr.length; i++) {
    if (arr[i]===arr[2]) {
        console.log( "index value", arr[i])
        
    }
    
}
let i=0;
while (i<arr.length) {
    console.log(arr[i]);
    i++;
}

// itaration

//find arr
let findvalue=40
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i]===findvalue) {
        console.log(`your findValue is ${arr[i]} find index ${i}`);
    }
    
    
}
//find arr

//update
let updateValue=1000;
let findIndex=5;
for (let i = 0; i < arr.length; i++) {
    
    if (i===findIndex) {
        arr[i]=updateValue;
        console.log("update value", arr[i])  
    }
    
    
};
//update

  {
    let deleteData=40;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===deleteData) {
            delete arr[i]
        }
        
    }
}

arr.push(300);
arr.shift();
arr.unshift(33);
arr.pop()
console.log(arr)

let StringArr=["Foridul","Emon","Rashidul","Milon","Mithon","asif"];
let bool=[true,false];
let objArr=[{
    name:["foridul islam","Rupaly","Milon","Mithon"],
    age:27,
    email:"foridulislamdise880@gmail.com",
    
    fullName:function(){
        return this.name[0] + " " + this.age + " " + this.email;
    }
},{}]

console.log(objArr[0].fullName());

let letaralArr=[];
letaralArr[0]="hi my name is Foridul islam";
letaralArr[1]="this is my practice time";
letaralArr[2]="I love programming";


let fristletaralArr=letaralArr[0];
let secondletaralArr=letaralArr[1];
let thirdletaralArr=letaralArr[2];
[One,two,three,four]=StringArr
if (!One) {
    console.log("hi")
}
else if(!two){
    console.log("hallow")
}
else if(!three){
    console.log("haw are you");
}
else if (!four) {
    console.log("okey")
}
else{
    console.log("rong way")
}

// let arr=[];
// let arr2=new Array();
// let Arr3=[10,30,40,50,3,3,];
