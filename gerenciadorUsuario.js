
module.exports = class gerenciadorUsuario {
    
     // Static properties shared by all instances
  static listUsuario = [];
 

  addUsuario(usuario){
    this.listUsuario.push(usuario);
  }
  addXpUsuario(usuario,xp)
  {
    usuario.addXp(xp);
  }
  addNivelUsuario(usuario,nivel)
  {
    usuario.addNivelUsuario(nivel);
  }
  
};
