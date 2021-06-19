const router = require('express').Router();
const ercCtrl = require('../../controllers/erc.js');

router.get('/:contract/:holder', ercCtrl.getHolderTokens);

module.exports = router;
