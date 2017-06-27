const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController.js');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', userController.home);

router.get('/login', userController.home);

router.get('/auth/instagram', authController.loginWithInstagram);
router.get('/auth/instagram/callback', authController.loginWithInstagramCallback);

router.get('/logout', authController.logout);

router.get('/feed', authController.isLoggedIn, catchErrors(userController.getFeed));
router.get('/feed/:id', authController.isLoggedIn, catchErrors(userController.getImage));
// router.post('/latest', authController.isLoggedIn, catchErrors(userController.postComment));

module.exports = router;
