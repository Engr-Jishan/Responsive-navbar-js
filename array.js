var numbers = [1, 2, 3, 4, 5, 6, 7];

var result = numbers.find(function (currentValue) {
    return currentValue > 4;
});

// console.log(result);      

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello Baibe");
    }
    exampleFunction() {
        let array = [1, 2, 3, 4];
        array.find(function () {
            this.test();
        }, this);
    }
}

let student = new Student("Jishan", 20);
student.exampleFunction();



