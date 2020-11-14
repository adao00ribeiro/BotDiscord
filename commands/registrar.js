const Cgerenciador = require("../gerenciadorUsuario");
const Cusuario = require("../usuario");

module.exports = {
	name: 'registrar',
	description: 'registro usuario!',
	execute(message) {
        
      const existUsuario =  Cgerenciador.verificaList(message.author.id);
        

        if(existUsuario)
        {
            message.channel.send("VOCE JA ESTA CADASTRADO!");
            return;
        }

        Cgerenciador.addUsuario(new Cusuario(message.author.id,message.author.name,1 , 0));   
        message.channel.send("Voce foi registrado");


	},
};