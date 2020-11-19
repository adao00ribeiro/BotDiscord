let Usuario = require('./usuario');

module.exports = class gerenciadorUsuario {
    
     // Static properties shared by all instances
  static listUsuario = [] ;
 
   verificaList(id){
    console.log(gerenciadorUsuario.listUsuario.length )
    for(var i = 0 ; i < gerenciadorUsuario.listUsuario.length  ; i++){
      if(gerenciadorUsuario.listUsuario[i].id == id){
      return true;
      }
    }
      return false;
  }
   getUsuario(id){
    
    if(gerenciadorUsuario.listUsuario.length ==0){
      return null
    }


    for(var i = 0 ; i < gerenciadorUsuario.listUsuario.length  ; i++){
      if(gerenciadorUsuario.listUsuario[i].id == id){
      return gerenciadorUsuario.listUsuario[i];
      }
    }
  
    return null
  }
   addUsuario(usuario){
    var gerenciadorDados = require('./gerenciadorDados');
  
    gerenciadorUsuario.listUsuario.push(usuario);
    gerenciadorDados.salvaUsuarios( gerenciadorUsuario.listUsuario)
  }
   addXpUsuario(usuario,xp)
  {
    
    usuario.setXp(xp);
  }
   addNivelUsuario(usuario,nivel)
  {
    usuario.addNivelUsuario(nivel);
  }
  
};
