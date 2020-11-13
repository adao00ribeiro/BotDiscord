const Cgerenciador = require("../gerenciadorUsuario");
const Cusuario = require("../usuario");

module.exports = {
	name: 'registrar',
	description: 'registro usuario!',
	execute(message) {
        
        const gerenciador = new Cgerenciador();
        
       
      const existUsuario =  Cgerenciador.listUsuario.forEach(usuario => {
            return usuario.id == message.user.id ? true : false;
        })

        if(existUsuario)
        {
            message.channel.send("VOCE JA ESTA CADASTRADO!");
            return;
        }

        gerenciador.addUsuario(new Cusuario(message.user.id,1 , 0));   
        message.channel.send("Voce foi registrado");


	},
};