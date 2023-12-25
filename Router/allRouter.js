const express = require('express')
const router = express.Router()

router.route('/mail')
    .post(require('../Controller/mailController').sendMail)
router.route('/resume')
    .get(require('../Controller/resumeController').downloadResume)
module.exports = router