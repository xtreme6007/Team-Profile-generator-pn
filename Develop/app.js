const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let response = {};

function startTeam() {
    inquirer.prompt([

        {
            name: "Role",
            type: "list",
            message: "please choose Team Member role",
            choices:["Manager", "Intern", "Engineer"]
        }
    ])
}



async function addMember() {
    const answers = await inquirer.prompt([
        {
            message: "Please enter your team name",
            name: "team"


        },

        {
            // get Team members name
            message: "Enter Team Member's name",
            name: "name"
        },
        {
            // get team members role
            type: "list",
            message: "Select temam members role",
            name: "role",
            choices: ["Engineer", "Intern", "Manager"]

        },
        {
            // get team members id
            name: "id",
            message: "Please enter Team members id."
        },
        // get team members email
        {
            name: "email",
            message: "Please enter user email."
        }

    ])
        .then(answers => {
            if (answers.role === "Engineer") {
                inquirer.prompt([
                    {
                        name: "Github",
                        message: "Please enter The Github Username"
                    }
                ])
                    .then(addMore)



            } else if (answers.role === "Intern") {
                inquirer.prompt([
                    {
                        name: "school",
                        message: "Please enter the school name"
                    }
                ])

            } else if (answers.role === "Manager") {
                inquirer.prompt([
                    {
                        name: "officeNumber",
                        message: "Please enter the office number for this employee"

                    }
                ])
            }


        })

    response.push(answers);
}

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
            if (answers.addMore === "yes") {
                return addMember();
            } else {
                fs.writeFile(outputPath, "html");
            }

        }

        )
}
const replacePlaceholders = (template, placeholder, value) => {

    //Creating a RegEx Pattern that searches for the placeholder that is given within the {{ }}
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");

    //Returns the template after replacing the placeholder with the user value 
    return template.replace(pattern, value);
};



addMember();












// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
