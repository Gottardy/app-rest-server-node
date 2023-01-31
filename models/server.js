const express = require('express');

class Server {
  constructor() {
    this.app = express();
    // Puerto expuesto
    this.port = process.env.PORT;

    // Middleware
    this.middlewares();

    // Rutas de la aplicacion
    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/', (req, res) => {
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
