function Animal(name)
{
    this.name = name;
}

Animal.prototype.speak = function(){

    console.log(this.name, "Is making some noise!");
}

let myDog = new Animal("Tommy");

console.log(myDog.name)
myDog.speak();