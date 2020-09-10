const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let members = [];
// the first question
function startTeam() {
    inquirer.prompt([

        {
            name: "Role",
            type: "list",
            message: "please choose Team Member role",
            choices:["manager", "intern", "engineer"]
        }
    ])
    // switch the next prompt series based on firt question response
    .then(response => {
        switch (response.Role){
            case "manager": 
            addManager()
            break;
            case "intern":
            addIntern()
            break;
            case "engineer":
            addEngineer()
            break;
            // default just bulids the page as is
            default: build();


        }
    }

    )
}

// if user selects to add a manager
    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter team member name",
                name: "manName"
            },
            {
                type: "input",
                name: "manId",
                message: "Please enter employees ID number"
            },
            {
            type: "input",
            name: "manEmail",
            message: "Please employees email"
            },
            {
                type: "input",
                name: "Office",
                message: "Please enter employees office numbers"

            }
        ])
        .then(response => {
            addMore();
            // create new instance of manager
            let manager = new Manager(response.manName, response.manId, response.manEmail, response.Office);
            // push to array
            members.push(manager);
            

        })
    }

    // if user selects to add an intern
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter team member name",
                name: "internName"
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter intern's ID number"
            },
            {
            type: "input",
            name: "internEmail",
            message: "Please intern's email"
            },
            {
                type: "input",
                name: "School",
                message: "Please enter intern's school name"

            }
        ])
        .then(response => {
            addMore();
            // create new instance of Intern
            let intern = new Intern(response.internName, response.internId, response.internEmail, response.School);
           // push to array
            members.push(intern);
            

        })
    }
// if user selects to add an Engineer
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "Please enter team member name",
                name: "engineerName"
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter employees ID number"
            },
            {
            type: "input",
            name: "engineerEmail",
            message: "Please employees email"
            },
            {
                type: "input",
                name: "gitHubUsername",
                message: "Please enter employees GitHub Username"

            }
        ])
        .then(response => {
            addMore();
            // create new instance  of enginner
            let engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.gitHub);
            // push to array
            members.push(engineer);
            

        })
    }
 // function to prompt to add more members or not
    function addMore(answers) {
        let add = inquirer.prompt([
            {
                type: "list",
                name: "addMore",
                message: "Would you like to add another team member?",
                choices: ["yes", "no"]
            }
        ])
            .then(answers => {
                // if user answers yes then run the start tem function again
                if (answers.addMore === "yes") {
                    startTeam();
                    // if not just build the html with the information given already
                } else {
                  build();
                }
    
            }
    
            )
    }
    // to build html 
    function build(){
        // if output_dir dosent exist
        if (!fs.existsSync(OUTPUT_DIR)) 
        {
            // create OUTPUT_DIR
            fs.mkdirSync(OUTPUT_DIR)

        }
        // write file
        fs.writeFileSync(outputPath, render(members), "utf-8")


    }

// init function
    startTeam();
    
