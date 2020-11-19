
let Usuario = require("../usuario");

module.exports = {
	name: 'registrar',
	description: 'registro usuario!',
	execute(message) {
    
        const GerenciadorUsuario = require("../gerenciadorUsuario");  
      
        let GerenciadorUser = new GerenciadorUsuario();
          
        const existUsuario =  GerenciadorUser.verificaList(message.author.id);
  
        if(existUsuario)
        {
            message.channel.send("VOCE JA ESTA CADASTRADO!");
            return;
        }
        GerenciadorUser.addUsuario(new Usuario(message.author.id,message.author.username,message.author.avatarURL(),1 , 0));   
        message.channel.send("Voce foi registrado");


	},
};