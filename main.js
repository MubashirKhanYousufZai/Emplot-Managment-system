import inquirer from "inquirer";
// Variable of employ
let employ = ["First employ: (Name: Ali , Age: 19 , Post: Sales Manager , Salary: 190000)",
    "Second employ: (Name: Aliyan , Age: 28 , Post: Sales Man , Salary: 100000)",
    "Third employ: (Name: Daniyal  , Age: 32 , Post: Staff Manager , Salary: 120000)",
    "Fourth employ: (Name: Mehdi , Age: 26 , Post: Peon , Salary: 5000)",
    "Fifth employ: (Name: Misbah , Age: 20 , Post: Guard , Salary: 60000"
];
// Function for asking the user what HE/SHE want to do.
let main = async () => {
    let option = await inquirer.prompt([
        {
            name: "Option",
            message: "Chose an option.",
            type: "list",
            choices: ["ADD EMPLOY", "REMOVE EMPLOY", "UPDATE EMPLOY", "LIST EMPLOY", "FIND EMPLOY"]
        },
    ]);
    if (option.Option === "ADD EMPLOY") {
        await add_Employ();
    }
    else if (option.Option === "REMOVE EMPLOY") {
        await removeEmploy();
    }
    else if (option.Option === "UPDATE EMPLOY") {
        await update_Employ();
    }
    else if (option.Option === "LIST EMPLOY") {
        await list_employs();
    }
    else if (option.Option === "FIND EMPLOY") {
        await find_Employ();
    }
};
// Function for adding employ
let add_Employ = async () => {
    let new_Employ = await inquirer.prompt([
        {
            name: "addEmploy",
            message: "Do you want to add a employ?",
            type: "confirm"
        },
    ]);
    let newEmploy = await inquirer.prompt([
        {
            name: "NewEmploy",
            message: "Give us the information of new employ",
            type: "input",
        },
    ]);
    employ.push(newEmploy.NewEmploy);
    console.log(`Your employ is added [view list of employes (list_employs)]`);
};
// Function for removing employ
let removeEmploy = async () => {
    let employIndex_number = await inquirer.prompt([
        {
            name: "number",
            message: "What is the ID number of employ?",
            type: "number",
        }
    ]);
    let removed = employ.splice(employIndex_number.number);
    console.log(`Your employ is removed ${employIndex_number.number} [view list of employs (list_employs)]`);
};
// Function for view list of employs
let list_employs = async () => {
    console.log(employ);
};
// Function for finding employ
let find_Employ = async () => {
    let giveIndexNumber = await inquirer.prompt([
        {
            name: "give",
            message: "Give me the index number of employ to find",
            type: "number",
        },
    ]);
    console.log(`${employ[giveIndexNumber.give]} Here is your employ.`);
};
// Function for updating employ information
let update_Employ = async () => {
    let updateEmploy = await inquirer.prompt([
        {
            name: "Update",
            message: "Give me the index number of employ to update.",
            type: "number",
        },
        {
            name: "addUpdate",
            message: "Add new updates.",
            type: "input",
        },
    ]);
    employ[updateEmploy.Update] = updateEmploy.addUpdate;
    employ.push(updateEmploy.add_Employ);
    console.log(`Updates at index number number ${updateEmploy.Update} updated Succesfully. [For checking updates view list_employs]`);
};
// calling main function
main();
