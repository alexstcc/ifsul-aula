const user = require('../models/usuariosModel');

var controller = module.exports;

controller.login = function (application, req, res) {
  var gruposModel = application.models.gruposModel;
  gruposModel.getGrupos(function(erro,grupos){
    if(erro){
      res.send(erro)
    }else{
      res.render("login.njk", {
        grupos : grupos
      });
    }
  });
};

controller.logar = function (email, password, application, req, res) {
  user.getUsuarioEmail(email, function(err, usuario){
    if (err) return res.send(err);
    if (usuario[0].senha == password) {
      res.render("index.njk", {
        teste : "Primeira página com ejs"
      });
    }else{
      
      return res.render("login.njk", {error: 'Login inválido'});
    }
  });
}

controller.index = function (application, req, res) {
  res.render("index.njk", {
    teste : "Primeira página com ejs"
  }); // Arquivo que será renderizado
};