// Your code here
const saturdayFun = (activity = 'roller-skate') => `This Saturday, I want to ${activity}!`;

const mondayWork = (activity = 'go to the office') => `This Monday, I will ${activity}.`;

const wrapAdjective = (highlighter = '*') => {
  return (adjective) => `You are ${highlighter}${adjective}${highlighter}!`;
}

let Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

const actionApplyer = (baseNum, arrayOfTransforms) => {
  if (arrayOfTransforms.length === 0) {
    return baseNum;
  }

  for (const transform of arrayOfTransforms) {
    baseNum = transform(baseNum);
  }
  return baseNum;
}