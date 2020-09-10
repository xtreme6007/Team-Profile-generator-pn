const Employee = require("./Employee")
// create manager class from employee
class Manager extends Employee {
constructor(name, id, email, officeNumber) {
    // inherit these parameters
    super(name, id, email)
    // add office number 
this.officeNumber = officeNumber
}
getRole(){
    return "Manager"
}
getOfficeNumber(){
    return this.officeNumber
}
}
module.exports = Manager;