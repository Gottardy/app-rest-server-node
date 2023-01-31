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
    // directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        msg: 'get API'
      });
    });

    this.app.put('/api', (req, res) => {
      res.json({
        msg: 'put API'
      });
    });

    this.app.post('/api', (req, res) => {
      res.json({
        msg: 'post API'
      });
    });

    this.app.delete('/api', (req, res) => {
      res.json({
        msg: 'delete API'
      });
    });
  }

  listener() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
