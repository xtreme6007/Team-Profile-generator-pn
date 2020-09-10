const Employee = require("./Employee")
// create new Intern class from employee
class Intern extends Employee{
    // create constructor
    constructor(name, id, email, school){
        //inherit these parameters
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
return this.school;
    }
    getRole(){
        return "Intern"
    }
}
module.exports = Intern;