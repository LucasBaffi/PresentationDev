class Person {
    constructor(name, age, height) {

        this.name = name;
        this.age = age;
        this.height = height;
    }

    apresetation() {
        console.log(`'Hello, My Name is '${this.name}. I have ${this.age} years and ${this.height} height`);
    }


}

class PersonProfession{

    constructor(name, age, height, profession){
        super(name, age, height);
        this.profession = profession;

    }
    apresetation() {
        console.log(`'Hello, My Name is '${this.name}. I have ${this.age} years, ${this.height} height and I'am ${this.profession} `);
    }
}