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
    this.app.use('/api/usuarios', require('../routes/user'));
  }

  listener() {
    this.app.listen(this.port, () => {
      console.log(`App listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
