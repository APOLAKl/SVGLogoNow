const inquirer = require("inquirer");
const fs = require("fs")
const Circle = require("./lib/circle");
const Square = require("./lib/square");
const Triangle = require("./lib/triangle");

const mainMenu = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "What up to 3 letter text do you like to add to your Logo?",
        validate: (text) => text.length <= 3 || "Must be within parameters",
      },
      {
        type: "list",
        name: "textColor",
        message: "What is the color of your text?",
        choices: ["red", "white", "violet", "blue", "green", "yellow", "orange"],
      },
      {
        type: "list",
        name: "shape",
        message: "What is the shape of your logo?",
        choices: ["square", "circle", "triangle"],
      },
      {
        type: "list",
        name: "shapeColor",
        message: "What is the shape color of your logo?",
        choices: ["black", "red", "violet", "blue", "green", "yellow", "orange", "transparent", ],
      },
      {
        type: "list",
        name: "border",
        message: "What is the shape border color of your logo?",
        choices: ["red", "violet", "blue", "green", "yellow", "orange"],
      },
    ])
    .then((answers) => {
      var inputShape;


      if (answers.shape == "circle") {
        inputShape = new Circle(answers.border, answers.shapeColor);
      }

      if (answers.shape == "square") {
        inputShape = new Square(answers.border, answers.shapeColor);
      }

      if (answers.shape == "triangle") {
        inputShape = new Triangle(answers.border, answers.shapeColor);
      }

      const generateSVG = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
    

${inputShape.render()}




<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
    `;

    fs.writeFile("./examples/logo.svg", generateSVG, () => {
      console.log("Generated logo.svg");
    });


});
}

mainMenu();