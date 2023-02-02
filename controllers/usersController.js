const { request, response } = require('express');

const usersGet = (req = request, res = response) => {
    // const query = req.query
    // Desesctruturando el query
    const { id, nombre,apellido = 'No Present', edad } = req.query;

    res.json({
    msg: 'get API - Controller',
    // query
    id,
    nombre,
    apellido,
    edad
  });
}

const usersPut = (req = request, res = response) => {
    // Recibiendo el parametro 'id' de la ruta y utilizandolo
    const id = req.params.id;

    res.json({
    msg: 'put API - Controller',
    id
  });
}

const usersPost = (req, res = response) => {
    // const body = req.body;
    // Desesctruturando el body
    const { nombre, edad } = req.body;

    res.json({
      msg: 'post API - Controller',
    //   body
    nombre,
    edad
    });
  }

const usersDelete = (req, res = response) => {
    res.json({
    msg: 'delete API - Controller'
  });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}