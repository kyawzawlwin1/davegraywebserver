const logEvents = require("./logEvents");
//d line ka a yay kyi tal
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

//initialize object

const myEmitter = new MyEmitter();

//1add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //2d mar phit tae event twy ko fs.promises.append ka eventlog.txt mar write lite tal
  myEmitter.emit("log", "Log event emitted");
}, 2000);
