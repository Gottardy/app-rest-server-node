const { request, response } = require('express');

const usersGet = (req, res = response) => {
    res.json({
    msg: 'get API - Controller'
  });
}

const usersPut = (req = request, res = response) => {
    // Recibiendo el parametro 'id' de la ruta y utilizarlo
    const id = req.params.id;

    res.json({
    msg: 'put API - Controller',
    id
  });
}

const usersPost = (req, res = response) => {
    // const body = req.body;
    // Desesctruturndo el body
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