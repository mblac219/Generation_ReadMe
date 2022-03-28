const inquirer = require( 'inquirer');
const fs = require('fs');
const assets = require( 'assets');

const generatorMarkdown = require('./assets/generatorMarkdown');

const licenseArray = [ 'apache-2.0', 'bsd-3-clause', 'gpl-3.0', 'mit', 'unlicense',]


inquirer 
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please give a brief description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the installation requirements?',
            name: 'install'
        },
        {
            type: 'input',
            message: 'What was the motivation behind your project?',
            name:  'inspiration'
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'reason'
        },
        {
            type: 'input',
            message: 'What did you learn from this project?',
            name: 'learn'
        },
        {
            type: 'input',
            message: 'Who contributed to this projecte?',
            name: 'contributors'
        },  
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is the URL of the live site?',
            name: "URL"
        },
        {
            type: 'input',
            message: 'What is the URL of the Github repo?',
            name: 'URL'
        },
        {
            type: 'list',
            message: 'Please select the license you used for your project.',
            name: 'license',
            choices: licenseArray
        },
        {
            type: 'input',
            message: 'Was any testing done during the build of your project?',
            name: 'test'
        },
        {
            type: 'input',
            message: 'Do you have any questions about this repo?',
            name: 'questions'
        },
        
])
fs.writeFile( fileName, data (function(error, data) {
if (err){
    return console.log(error) 
}else{
    console.log(data)
}


//start program
function init( ) { 
    inquirer.prompt ( )
    .then(function(data) {
        writeToFile( 'README.md', generatorMarkdown(data));
        console.log(data)
    })
}
   
init ( );
