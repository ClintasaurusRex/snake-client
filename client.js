
const net = require("net");
const { IP, PORT, } = require("./constants");



const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding('utf-8');

  conn.on("connect", () => {
    console.log("connected to game server server!");

    conn.write("Name: CDA");

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);

    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 2000);

    // setTimeout(() => {
    //   conn.write("Move: right");
    // }, 3000);

    // setup interface to handle user input from stdin
  
  
  });


  conn.on("data", (data) => {
    console.log("server says: ", data);
  });

  conn.on("close", () => {
    console.log("The connection was closed");
  });


  return conn;
};

module.exports = { connect };