interface Nameable {
  name: string;
  sayName(): void;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name
  }
  sayName(): void {
    console.log(this.name);
  }
}

function introduce(nameable: Nameable) {
  nameable.sayName();
}

introduce(new Person('John'));
