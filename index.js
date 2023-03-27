const inquirer = require("inquirer");
const fs = require("fs")
const Shape = require("./lib/shapes");

const selectedShape = [];

const mainMenu = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "What up to 3 letter text do you like to add to your Logo?",
      },
      {
        type: "list",
        name: "textColor",
        message: "What is the color of your text?",
        choices: ["red", "violet", "blue", "green", "yellow", "orange"],
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
        choices: ["red", "violet", "blue", "green", "yellow", "orange"],
      },
      {
        type: "list",
        name: "shapeBorderColor",
        message: "What is the shape border color of your logo?",
        choices: ["red", "violet", "blue", "green", "yellow", "orange"],
      },
    ])
    .then((answers) => {
      if (parseInt(answers.text) <= 0 || parseInt(answers.text) >= 4) {
        console.log("Please put atleast 1-3 text");
        mainMenu();
      }

      if (answers.shape == "square") {
        addSquareLogo();
      }

      if (answers.shape == "circle") {
        addCircleLogo();
      }

      if (answers.shape == "triangle") {
        addTriangleLogo();
      }
    });
};

const addSquareLogo = () => {
  inquirer
    .prompt([
      {   
        type: "input",
        name: "Xaxis",
        message: "What is the xAxis of the square?",
      },
      {
        type: "input",
        name: "Yaxis",
        message: "What is the yAxis of the square?",
      },
      {
        type: "input",
        name: "width",
        message: "What is the width of the square?",
      },
      {
        type: "input",
        name: "height",
        message: "What is the height of the square?",
      },
    ])
    .then((answers) => {
      const newShape = new Shape(
        answers.Xaxis,
        answers.Yaxis,
        answers.width,
        answers.height
      );
      console.log(answers)


      selectedShape.push(newShape);

      generateSVG();

      mainMenu();
    });
};

const generateSVG = () => {
  console.log(selectedShape);

  const template = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

  ${
    selectedShape.map(shape => {
      return (`
        <rect x="${answer.Xaxis()}" y="${answer.Yaxis()}" width="${answer.width()}%" height="${answer.height()}%" stroke="${shape.answers.border()}" fill="${shape.answers.fill()}" stroke-width="5" />
      `)
    })
  }
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${shape.getText()}</text>

</svg>`
  
  


  fs.writeFile("./examples/logo.svg", template, () => {
    console.log("SVG created!")
  })
}

mainMenu();

{/* <circle cx="150" cy="100" r="80" fill="green" /> */}