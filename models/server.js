const express = require('express');
const cors = require('cors');

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
    // CORS
    this.app.use(cors());
    // directorio publico
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
        res.status(200).json({
        msg: 'get API'
      });
    });

    this.app.put('/api', (req, res) => {
        res.status(200).json({
        msg: 'put API'
      });
    });

    this.app.post('/api', (req, res) => {
      res.status(200).json({
        msg: 'post API'
      });
    });

    this.app.delete('/api', (req, res) => {
        res.status(200).json({
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
