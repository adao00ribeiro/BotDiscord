var fs = require('fs');

module.exports = class gerenciadorDados {

  
  static salvaUsuarios(list){

  var obj = JSON.stringify(list);
  fs.writeFile('./dados/usuarios.json', obj, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  }
   carregarUsuarios(){
    let GerenciadorUsuario = require('./gerenciadorUsuario');
    try {
      let rawdata = fs.readFileSync('./dados/usuarios.json');
      
      GerenciadorUsuario.listUsuario = JSON.parse(rawdata);
   
    } catch (err) {
      // Here you get the error when the file was not found,
      // but you also get any other error,
      console.log("erro nao encontrado")
    }
 
    /*
    fs.readFile('./dados/usuarios.json',function(err, data) { 
      if(err) 
          console.log("nao tem"); 
      else
      GerenciadorUsuario.listUsuario = JSON.parse(data);
      console.log("lista carregada")
      console.log( GerenciadorUsuario.listUsuario.length )
  }); 
    */
  }
};
