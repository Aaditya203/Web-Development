class Animal{
    
    constructor(name,speaks,legCount){
        this.name = name;
        this.speaks = speaks;
        this.legCount = legCount;
    }
    speak(){
        console.log("Hi there "+this.speaks);
    }
}

let dog = new Animal("dog","bhow bhow",4);
let cat = new Animal("Cat","meow meow",4);

cat.speak();