const usuario = require('./usuario')
module.exports = class gerenciadorUsuario {
    
     // Static properties shared by all instances
  static  listUsuario = [new usuario];
 
  static verificaList(id){
   
    for(var i = 0 ; i < this.listUsuario.length ; i++){
      if(this.listUsuario[i].id == id){
      return true;
      }
    }
      return false;
  }
  static addUsuario(usuario){
    this.listUsuario.push(usuario);
  }
  static addXpUsuario(usuario,xp)
  {
    usuario.addXp(xp);
  }
  static addNivelUsuario(usuario,nivel)
  {
    usuario.addNivelUsuario(nivel);
  }
  
};
