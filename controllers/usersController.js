const { response } = require('express');

const usersGet = (req, res = response) => {
    res.status(200).json({
    msg: 'get API - Controller'
  });
}

const usersPut = (req, res = response) => {
    res.status(200).json({
    msg: 'put API - Controller'
  });
}

const usersPost = (req, res = response) => {
    // const body = req.body;
    // Desesctruturndo el body
    const { nombre, edad } = req.body;

    res.status(200).json({
      msg: 'post API - Controller',
    //   body
    nombre,
    edad
    });
  }

const usersDelete = (req, res = response) => {
    res.status(200).json({
    msg: 'delete API - Controller'
  });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}