const router = require('express').Router();
const itemService = require('../services/item.service');

router.get('/', (req, res, next) => {
  res.send('main page');
})

router.get('/something', (req, res, next) => {
  itemService.findItems()
    .then(items => {
      res.send({items: items});
    })
    .catch(err => next(err));
});

module.exports = router;