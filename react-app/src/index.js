class Person
{
	constructor(name) {
		this.name = name;
	}

	walk() {
		console.log(this.name + ' is walking');
	}
}

class Teacher extends Person {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }

  speak() {
    console.log(this.name + ' has monthly ' + this.salary + ' salary');
  }

}

const teacher = new Teacher('Inderjit', 55000);
teacher.speak();
