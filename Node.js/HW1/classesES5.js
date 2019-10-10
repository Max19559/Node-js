var UserES5 = function (name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.getName = function (){
        return this.name;
    }

    this.getSurname = function (){
        return this.surname;
    }

    this.getAge = function(){
        return this.age;
    }

    this.setName = function(newName){
        if(newName < 30){
            this.name = newName;
        } else{
            console.log("Sorry, set norm name!");
        }
    }

    this.setSurname = function(newSurname){
        if(newSurname < 30){
            this.surname = newSurname;
        } else{
            console.log("Sorry, set norm surname!");
        }
    }
}

UserES5.prototype.setAge = function(newAge){
    if(newAge > 0 && newAge < 120){
        this.age = newAge;
    } else{
        console.log("NO! Set norm age!");
    }
}


var WorkerES5 = function(name, surname, age, workerID){
    UserES5.apply(this, arguments);
    this.workerID = workerID;

    this.getWorkerID = function(){
        return this.workerID;
    }

    this.setWorkerID = function(newWorkerID){
        if(newWorkerID < 10000){
            this.workerID = newWorkerID;
        }
    }
}


WorkerES5.prototype = Object.create(UserES5.prototype);
WorkerES5.prototype.constructor = WorkerES5;


WorkerES5.prototype.setAge = function(newAge){
    if(newAge > 18 && newAge < 60){
        this.age = newAge;
    } else{
        console.log("You can't work in our Factory");
    }
}






var userES5 = new UserES5("Alex", "Lexus", 19);
var workerES5 = new WorkerES5("Gevorg", "Abramian", 19, 31543);


userES5.setAge(17);
workerES5.setAge(17);
console.log(userES5.getAge());
console.log(workerES5.getAge());
console.log(userES5);
console.log(workerES5);


