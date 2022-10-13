const { validationResult } = require('express-validator');
const register = async (req, res, next) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            const alert = error.array();
            res.render('register',{alert})
        }else{
            res.render('register')
        }
    } catch (error) {
        console.log('error',error)
        next(error);
    }
}

module.exports = register;