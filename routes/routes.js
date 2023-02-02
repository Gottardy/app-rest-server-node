const { Router } = require('express');

const router = Router();

router.get('/api', (req, res) => {
    res.status(200).json({
    msg: 'get API'
  });
});

router.put('/api', (req, res) => {
    res.status(200).json({
    msg: 'put API'
  });
});

router.post('/api', (req, res) => {
  res.status(200).json({
    msg: 'post API'
  });
});

router.delete('/api', (req, res) => {
    res.status(200).json({
    msg: 'delete API'
  });
});

module.exports = router;