const pad = (input, width = 4, char = ' ') => {
  return ('    ' + String(input)).slice(-3);
};

// players are A and B;
const PLAYER_A = 'A';
const PLAYER_B = 'B';
const A_HOME = 'aHome';
const B_HOME = 'bHome';
const A_BAR = 'aBar';
const B_BAR = 'bBar';
const A = PLAYER_A;
const B = PLAYER_B;
module.exports.consts = {
  PLAYER_A,
  PLAYER_B,
  A_HOME,
  B_HOME,
  A_BAR,
  B_BAR
};

module.exports.opp = player => {
  if (player === A) {
    return B;
  }
  if (player === B) {
    return A;
  } else {
    throw new Error('BAD PLAYER');
  }
};

module.exports.oppBar = player => {
  if (player === A) {
    return B_BAR;
  }
  if (player === B) {
    return A_BAR;
  } else {
    throw new Error('BAD PLAYER');
  }
};

const objectLoop = (object, iterator) => {
  let keys = Object.keys(object);
  keys.forEach(key => {
    iterator(key, object[key]);
  });
};

module.exports.defaultBoard = {
  aHome: { p: A, n: 0 },
  bHome: { p: B, n: 0 },
  aBar: { p: A, n: 0 },
  bBar: { p: B, n: 0 },
  '1': { p: A, n: 2 },
  '2': { n: 0, p: null },
  '3': { n: 0, p: null },
  '4': { n: 0, p: null },
  '5': { n: 0, p: null },
  '6': { p: B, n: 5 },
  '7': { n: 0, p: null },
  '8': { p: B, n: 3 },
  '9': { n: 0, p: null },
  '10': { n: 0, p: null },
  '11': { n: 0, p: null },
  '12': { p: A, n: 5 },
  '13': { p: B, n: 5 },
  '14': { n: 0, p: null },
  '15': { n: 0, p: null },
  '16': { n: 0, p: null },
  '17': { p: A, n: 3 },
  '18': { n: 0, p: null },
  '19': { p: A, n: 5 },
  '20': { n: 0, p: null },
  '21': { n: 0, p: null },
  '22': { n: 0, p: null },
  '23': { n: 0, p: null },
  '24': { p: B, n: 2 }
};

module.exports.log = board => {
  let points = [];
  for (let i = 1; i < 25; i++) {
    let point = board[i];
    if (point.p){
      points[i] = pad(`${point.p}${point.n}`);
    } else {
      points[i] = pad(`${point.n}`);
    }
  }
  const string = `
      A     B
bar ${pad(board[A_BAR].n)}  -${pad(board[B_BAR].n)}
home${pad(board[A_HOME].n)}  -${pad(board[B_HOME].n)}

  1  2  3  4  5  6     7  8  9 10 11 12
${points[1]}${points[2]}${points[3]}${points[4]}${points[5]}${points[6]}   ${points[7]}${points[8]}${points[9]}${points[10]}${points[11]}${points[12]}

${points[24]}${points[23]}${points[22]}${points[21]}${points[20]}${points[19]}   ${points[18]}${points[17]}${points[16]}${points[15]}${points[14]}${points[13]}
 24 23 22 21 20 19    18 17 16 15 14 13
`;
  console.log(string);
};
