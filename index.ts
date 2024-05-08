#! /usr/bin/env node
import inquirer from "inquirer";

class student {
    std_name: string;
    constructor(name: string) {
        this.std_name =name
    }
}
class friend {
    frnd_name : string;
    constructor(frnd: string) {
        this.frnd_name = frnd
    }
}
class teacher {
    teach_name: string;
    constructor(teach: string) {
        this.teach_name = teach
    }

class Person {
    students: student[] = []
    friends: friend[] = []
    teachers: teacher[] = []

    addStd(obj: student) {
        this.students.push(obj)
    }
    addfrnd(frnd: friend) {
        this.friends.push(frnd)
    }
    addteach(teach:teacher){
    this.teachers.push(teach)
    }
}
let persons = new Person()

const program_Start = async (persons: Person) => {
    console.log( "Welcome For Talking App!");
    do{
    const ans = await inquirer.prompt({        
        name: "option",
        type: "list",
        message: "Who would you like to talk ?",
        choices: ["Friends", "Students", "Teachers"]
    })
    if(ans.option == "Friends") {
        let frnd = await inquirer.prompt({
            name: "friend",
            type: "input",
            message: " which friend do you want to talk ?"
        })
        const frnd1 = persons.friends.find(x => x.frnd_name == frnd.friend)
        if(!frnd1) {
            const new_Friend = new friend(frnd.friend) 
            persons.addfrnd(new_Friend)
            console.log(`Hi i am ${new_Friend.frnd_name}`)
            console.log(persons.friends)
        }
        if(frnd1) {
            console.log(`Hi i am your ${frnd1.frnd_name}`)
            console.log(persons.friends)
        }
    }

    if(ans.option == "Students") {
        let std = await inquirer.prompt({
            name: "std_Name",
            type: "input",
            message: " Which Student do you want to talk ?"
        })
        const std1 = persons.students.find(val => val.std_name == std.std_Name)
        if(!std1) {
            const new_Std = new student(std.std_Name)
            persons.addStd(new_Std)
            console.log(`Hello, i am  student of GIAIC ${new_Std.std_name}`)
            console.log(persons.students)
        }
        if(std1) {
            console.log(`Hello , i am your student of GIAIC ${std1.std_name}`)
            console.log(persons.students)
        }
    }

    if(ans.option == "Teachers") {
        let teach = await inquirer.prompt({
            name: "teacher_Name",
            type: "input",
            message: " Which Teacher do you want talk to ?"
        })
        const teach1 = persons.teachers.find(val => val.teach_name == teach.teacher_Name)
        if(!teach1) {
            const new_Teach = new teacher(teach.teacher_Name)
            persons.addStd(new_Teach);
            console.log(`Hello, i am  Teacher of GIAIC ${new_Teach.teach_name}`)
            console.log(persons.teachers)
        }
        if(teach1) {
            console.log(`Hello, I am Teacher Of GIAIC ${teach1.teach_name}`)
            console.log(persons.teachers)
        }
    }

}while(true)
}
program_Start(persons)