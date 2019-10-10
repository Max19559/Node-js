class UserES6 {

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    getName() { return this.name; }

    getSurname() { return this.surname; }

    getAge() { return this.age; }

    setName(newName) {
        if (newName < 30) {
            this.name = newName;
        } else {
            console.log("Sorry, set norm name!");
        }
    }

    setSurname(newSurname) {
        if (newSurname < 40) {
            this.surname = newSurname;
        } else {
            console.log("Sorry, set norm surname!");
        }
    }

    setAge(newAge) {
        if (newAge > 0 && newAge < 120) {
            this.age = newAge;
        } else {
            console.log("NO! Set norm age!");
        }
    }
}


class WorkerES6 extends UserES6{

    constructor(name, surname, age, workerID) {
        super(name, surname, age);
        this.workerID = workerID;
    }

    setAge(newAge) {
        if (newAge > 18 && newAge < 65) {
            this.age = newAge;
        } else {
            console.log("You can't work");
        }
    }
}


var userES6 = new UserES6("Alex", "Lexus", 19);
var workerES6 = new WorkerES6("Gevorg", "Abramian", 19, 31543);


userES6.setAge(17);
workerES6.setAge(17);
console.log(workerES6.getAge());
console.log(userES6.getAge());
console.log(userES6);
console.log(workerES6);