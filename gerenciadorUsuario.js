module.exports = class gerenciadorUsuario {
  // Static properties shared by all instances
  static listUsuario = [];

  static xpRequerido = 2000;

  verificaList(id) {

    for (var i = 0; i < gerenciadorUsuario.listUsuario.length; i++) {
      if (gerenciadorUsuario.listUsuario[i].id == id) {
        return true;
      }
    }
    return false;
  }
  getUsuario(id) {
    if (gerenciadorUsuario.listUsuario.length == 0) {
      return null;
    }

    for (var i = 0; i < gerenciadorUsuario.listUsuario.length; i++) {
      if (gerenciadorUsuario.listUsuario[i].id == id) {
        return gerenciadorUsuario.listUsuario[i];
      }
    }

    return null;
  }
  addUsuario(usuario) {
    var gerenciadorDados = require("./gerenciadorDados");

    gerenciadorUsuario.listUsuario.push(usuario);
    gerenciadorDados.salvaUsuarios(gerenciadorUsuario.listUsuario);
  }
  static ordenaLista(){
    this.listUsuario.sort(function (a, b) {
      if (a.nivel > b.nivel) {
        return -1;
      }
      if (a.nivel < b.nivel) {
        return 1;
      }

      return 0
  })
}
  addXpUsuario(id, xp) {
    var gerenciadorDados = require("./gerenciadorDados");
    gerenciadorUsuario.listUsuario.forEach((element) => {
      if (element.id == id) {
        element.xp += xp;
      
        element.nivel =gerenciadorUsuario.contNivels( element.xp);
        gerenciadorUsuario.ordenaLista();
        
      }
    });
    gerenciadorDados.salvaUsuarios(gerenciadorUsuario.listUsuario);
  }

  static contNivels(xp){
    var cont = 1;
  for(var i = this.xpRequerido ; i < xp ; i++)
  {
        cont++;
      
      i += this.xpRequerido;
  }
  return cont;
  }
};
