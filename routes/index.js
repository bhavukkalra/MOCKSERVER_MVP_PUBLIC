const router = require('express').Router();
const handle = require('../handlers');

//routes for getting the data on a specific endpoint or showing it
router.route('/:id')
    .get(handle.getMockPoint)

module.exports = router;