const router = require('express').Router();
const postCtrl = require('../../controllers/api/posts');

router.get('/', postCtrl.all);
router.get('/:id', postCtrl.getOne);
router.post('/', postCtrl.create);
router.put('/:id', postCtrl.update);
router.delete('/:id', postCtrl.deleteOne);

module.exports = router;
