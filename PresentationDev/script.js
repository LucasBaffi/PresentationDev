class Person {
    constructor(name, age, height) {

        this.name = name;
        this.age = age;
        this.height = height;
    }

    presetation() {
        console.log(`'Hello, My Name is '${this.name}. I have ${this.age} years and ${this.height} height`);
    }


}

class PersonProfession extends Person {

    constructor(name, age, height, professional) {
        super(name, age, height);
        this.professional = professional;

    }
    presetation() {
        console.log(`'Hello, My Name is '${this.name}. I have ${this.age} years, ${this.height} height and I'am ${this.professional} `);
    }
}


const people = new Person('lucas', 29, 170)
people.presetation()