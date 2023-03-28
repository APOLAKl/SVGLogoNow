const inquirer = require("inquirer");
const fs = require("fs")
const Circle = require("./lib/circle");

const selectedShape = [];

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
        choices: ["red", "violet", "blue", "green", "yellow", "orange", "transparent"],
      },
      {
        type: "list",
        name: "border",
        message: "What is the shape border color of your logo?",
        choices: ["red", "violet", "blue", "green", "yellow", "orange"],
      },
    ])
    .then((answers) => {
      const circle = new Circle();
      const circleShape = circle.render()
      //  if (answers.shape == "square") {
      //   squareShape = `<rect x="10" y="10" width="80%" height="80%" stroke="${answers.border}" fill="${answers.shapeColor}" stroke-width="5" />`;
      // }

      if (answers.shape == "circle") {
        circleShape();
      }

      // if (answers.shape == "triangle") {
      //   triangleShape = `<polygon points="250,60 100,400 400,400" stroke="${answers.border}" fill="${answers.shapeColor}" stroke-width="5" />`;
      // }

      // console.log(answers);


      const generateSVG = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
    

${circleShape}




<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
    `;

    fs.writeFile("./examples/logo.svg", generateSVG, () => {
      console.log("SVG created!");
    });


});
}

mainMenu();


// const addSquareLogo = () => {
//   inquirer
//     .prompt([
//       {   
//         type: "input",
//         name: "Xaxis",
//         message: "What is the xAxis of the square?",
//       },
//       {
//         type: "input",
//         name: "Yaxis",
//         message: "What is the yAxis of the square?",
//       },
//       {
//         type: "input",
//         name: "width",
//         message: "What is the width of the square?",
//       },
//       {
//         type: "input",
//         name: "height",
//         message: "What is the height of the square?",
//       },
//     ])
//     .then((answers) => {
//       const newShape = new Shape(
//         answers.Xaxis,
//         answers.Yaxis,
//         answers.width,
//         answers.height
//       );
//       console.log(answers)


//       selectedShape.push(newShape);

//       generateSVG();

//       mainMenu();
//     });
// };

// const generateSVG = () => {
//   console.log(selectedShape);

//   const template = `

//   ${
//     selectedShape.map(shape => {
//       return (`
//         <rect x="10" y="10" width="80%" height="80%" stroke="${shape.answers.getborder()}" fill="${shape.answers.getfill()}" stroke-width="5" />
//       `)
//     })
//   }
// `
  
  


  
// }

// mainMenu();

{/* <circle cx="150" cy="100" r="80" fill="green" /> */}