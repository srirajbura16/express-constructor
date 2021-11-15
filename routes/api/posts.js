const express = require('express');
const router = express.Router();

const postController = require('../../controllers/postController');

router.get('/', postController.get_ads);
router.post('/', postController.create_ad);

router.get('/:id', postController.get_ad);
// router.patch('/:id', adsController.update_ad);
// router.delete('/:id', adsController.delete_ad);

module.exports = router;
