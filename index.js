import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold.underline("Welcome to Object Oriented Program With MehwishNaz"));
class student {
    std_name;
    constructor(name) {
        this.std_name = name;
    }
}
class friend {
    frnd_name;
    constructor(frnd) {
        this.frnd_name = frnd;
    }
}
class teacher {
    tchr_name;
    constructor(name) {
        this.tchr_name = name;
    }
}
class Person {
    friends = [];
    students = [];
    teachers = [];
    addfrnd(obj) {
        this.friends.push(obj);
    }
    addStd(obj) {
        this.students.push(obj);
    }
    addTchr(obj) {
        this.teachers.push(obj);
    }
}
let persons = new Person();
const program_Start = async (persons) => {
    console.log(chalk.bold.underline.magentaBright("Welcome For Talking App!"));
    do {
        const ans = await inquirer.prompt({
            name: "option",
            type: "list",
            message: "Who would you like to talk ?",
            choices: ["Friends", "Students", "Teachers"]
        });
        if (ans.option == "Friends") {
            let frnd = await inquirer.prompt({
                name: "friend",
                type: "input",
                message: " which friend do you want to talk ?"
            });
            const frnd1 = persons.friends.find(val => val.frnd_name == frnd.friend);
            if (!frnd1) {
                const new_Friend = new friend(frnd.friend);
                persons.addfrnd(new_Friend);
                console.log(chalk.yellowBright(`Hi i am ${new_Friend.frnd_name}`));
                console.log(persons.friends);
            }
            if (frnd1) {
                console.log(`Hi i am  ${frnd1.frnd_name}`);
                console.log(persons.friends);
            }
        }
        if (ans.option == "Students") {
            let std = await inquirer.prompt({
                name: "std_Name",
                type: "input",
                message: " Which Student do you want to talk ?"
            });
            const std1 = persons.students.find(val => val.std_name == std.std_Name);
            if (!std1) {
                const new_Std = new student(std.std_Name);
                persons.addStd(new_Std);
                console.log(chalk.yellowBright(`Hello, i am ${new_Std.std_name} Student of GIAIC `));
                console.log(persons.students);
            }
            if (std1) {
                console.log(chalk.yellow(`Hello , i am ${std1.std_name} Student of GIAIC `));
                console.log(persons.students);
            }
        }
        if (ans.option == "Teachers") {
            let tchr = await inquirer.prompt({
                name: "tchr_Name",
                type: "input",
                message: " which teacher do you want to talk ?"
            });
            const tchr1 = persons.teachers.find(val => val.tchr_name == tchr.tchr_Name);
            if (!tchr1) {
                const new_Tchr = new teacher(tchr.tchr_Name);
                persons.addTchr(new_Tchr);
                console.log(chalk.yellowBright(`Hi i am teacher, My name is ${new_Tchr.tchr_name}`));
                console.log(persons.teachers);
            }
            if (tchr1) {
                console.log(`Hi i am  ${tchr1.tchr_name}`);
                console.log(persons.teachers);
            }
        }
    } while (true);
};
program_Start(persons);
