const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')


// Your code here!
let color1 = getInput(0)
let color2= getInput(1)

if (color1 === undefined){

  console.log('You need to enter a color')
}

else if (color1 !== undefined && color2 === undefined){
  console.log(colorDeconstructor(color1))

}

else if (color1 && color2 !== undefined){

  console.log(colorCombinator(color1, color2))
}
// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}

