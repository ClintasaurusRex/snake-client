
const { connect } = require("./client");
const { setupInput } = require("./input");



console.log("Connecting....");
const makingItWork = connect();
setupInput(makingItWork);
