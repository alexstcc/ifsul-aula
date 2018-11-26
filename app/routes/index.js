const { check, body, validationResult } = require('express-validator/check');

module.exports = function (application) {
  var controllerIndex = application.controllers.index;

  application.get('/', function (req, res) {
     controllerIndex.login(application,req,res);
  });

  application.get('/index', function (req, res) {
    controllerIndex.index(application,req,res);
  });

  application.post('/auth', [
      body('email').isEmail(),
      body('password').isLength({ min: 5 })],
      function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(403).json({ errors: errors.array() });
        }else{
          controllerIndex.logar(req.body.email, req.body.password, application,req,res);
        }
      });
};