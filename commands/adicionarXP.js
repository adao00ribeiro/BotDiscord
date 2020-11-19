

module.exports = {
	name: 'xp',
	description: 'Ping!',
	execute(message,args,listmember) {
		const gerenciadorUsuario = require("../gerenciadorUsuario")
		const gerenciador = new gerenciadorUsuario()
		if(args.length==0){
			message.channel.send("./xp 'nome' '50000'");
        }
        
        console.log(args[0])

        var str = args[0];
        str = str.replace("<", "");
        str = str.replace(">", "");
        str = str.replace("@", "");
        str = str.replace("!", "");
		const Usuario = require("../usuario");
		if(gerenciador.verificaList(str)){
			
			if(args[1]>0)
			{
			
                gerenciador.addXpUsuario(str,args[1]);
				message.channel.send("xp adicionado");
			}
		

		}

	},
};