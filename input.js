
let conn = null;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit(); /// escape function
  } else if (key === 'w') {
    conn.write("Move: up");
  } else   if (key === 'a') {
    conn.write("Move: left");
  } else if (key === 's') {
    conn.write("Move: down");
  } else  if (key === 'd') {
    conn.write("Move: right");
  } else if (key === "u") {
    conn.write("Say: Stupendous");
  } else if (key === "p") {
    conn.write("Say: Gotcha");
  } else if (key === "i") {
    conn.write("Say: Bawitdaba");
  } else if (key === "o") {
    conn.write("Say: IMMA SLITHERY SNAKE");
  }
};


const setupInput = function(connection) {
  conn = connection;

  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

module.exports = { setupInput };