const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.routes();
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hello World");
    });
  }

  listener() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
