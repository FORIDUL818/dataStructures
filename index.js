class Array {
    constructor() {
        this.arr=[]
    }
    add(item) {
        this.arr.push(item);
    }
    remove(item) {
        this.arr.splice(this.arr.indexOf(item), 1);
    }
    get(index) {
        return this.arr[index];
    }
    size() {
        return this.arr.length;
    }
     display(){
       for (let i = 0;i  < this.arr.length; i++) {
        if (this.arr[i]) {
            console.log(this.arr[i])
        }
       }
     } 
}

let newData=new Array();
newData.add(10);
newData.add(20);
newData.add(30);
newData.add(40);
newData.add(50);
newData.display()