// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("Employee")


class Engineer extends Employee {
    constructor(github){
        super(id, name, email)
        this.githubUsername = github;
    }
    getGithub() {
        const gitProfile = "https://github.com/" + this.github;
        return gitProfile;
    }

    getRole() {
        return "Engineer";
    }
}