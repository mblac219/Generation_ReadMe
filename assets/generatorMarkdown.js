
## Title
${data.Title}

## Name
${data.Name}

## Email
${data.Email}

##Github Username
${data.Username}

##Github URL
https://github.com/${data.username}/${data.Title}

##Link to Site

## Description
${data.Description}


- What was your motivation?
${data.Inspiration}

- Why did you build this project? 
${data.Reason}

- What did you learn?
${data.Learn}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Test](#test)
- [Questions](#questions)


## Installation
${data.Install}

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.
${data.Contributors}

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License
${data.License}

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## Tests

#Questions
If you have any questions about this repo email me at:
${data.Email}


module.exports = generatorMarkdown;
