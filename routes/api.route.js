const router = require('express').Router();
const controller = require('../controller');
const { check } = require('express-validator');


router.post('/register', 
  check('username', 'Username must be 3+ characters long')
   .isLength({ min: 3 }),
  check('email', 'Email is not valid')
     .isEmail()
     .normalizeEmail(),
  check('password1', 'Password should be more than 6 characters')
     .isLength({min: 6}),
  check('password2', 'Password does not match')
     .isLength({ min: 6})
     .custom(async(password2,{req}) => { if(req.body.password !== password2) throw new Error('Password does not match')}),
  controller.register);

module.exports = router;
