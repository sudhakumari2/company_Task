const express = require('express')
const router = express.Router();
const userController = require('../controller/customer')
router.post('/create-post', userController.create_post)
router.get('/get-data',userController.get_data)
router.put('/update-data/:customerId',userController.update_data)
router.delete('/update-data/:customerId',userController.delete_data)
module.exports = router;