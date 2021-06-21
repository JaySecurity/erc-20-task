const router = require('express').Router();
const photoCtrl = require('../../controllers/api/photos');

router.get('/', photoCtrl.all);
router.get('/:id', photoCtrl.getOne);
router.post('/', photoCtrl.create);
router.put('/:id', photoCtrl.update);
router.delete('/:id', photoCtrl.deleteOne);

module.exports = router;
