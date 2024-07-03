
const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost", // 10.0.0.84
    port: 50541, // 50541
  });

  conn.setEncoding('utf-8');

  conn.on("connect", () => {
    console.log("connected to server!");
  });

  conn.on("data", (data) => {
    console.log("server says: ", data);
  });

  conn.on("close", () => {
    console.log("The connection was closed");
  });


  return conn;
};

console.log("Connecting....");
connect();


