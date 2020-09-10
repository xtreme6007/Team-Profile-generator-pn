const Employee = require("./Employee")

// create new enginner class from employee
class Engineer extends Employee {
    constructor(name, id, email, github){
        //inherit paramters
        super(name, id, email)
        this.github = github;
    }
    getGithub() {
        
        return this.github
    }

    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;