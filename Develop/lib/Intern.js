// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor(school){
        super(id, name, email);
        this.school = school;
    }
    getSchool(){
return this.school;
    }
    getRole(){
        return "Intern"
    }
}