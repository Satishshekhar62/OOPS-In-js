let Person = { Name : "Satish", Age: 28, City : "Madhepura"};

console.log(Person.Name);
console.log(Person.Age);
console.log(Person.City);

let rectangle = {

    length: 5,
    breadth: 7,
    area : function(){
        return this.length*this.breadth
    }
}

console.log(rectangle.length);
console.log(rectangle.breadth);
console.log("Area of Rectangle is :", rectangle.area());