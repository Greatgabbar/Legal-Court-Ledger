const express = require('express');
const authController = require('../controllers/authController');
const caseController = require('../controllers/caseController');

const router = express.Router();

router.route('/case/:id').get(authController.protect, caseController.getCase);

router.route('/add-case').post(authController.protect, authController.restrictTo('admin'), caseController.addCase);
router.route('/add-evidence/:id').patch(authController.protect, authController.restrictTo('admin'), caseController.uploadEvidence ,caseController.addEvidence);

router.route('/').get((req, res) => {
  res.status(200).json({
    message: 'holaaa from the server side!!',
    app: 'test-login',
  });
});

module.exports = router;
