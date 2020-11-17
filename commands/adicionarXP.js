const gerenciadorUsuario = require("../gerenciadorUsuario");

module.exports = {
	name: 'xp',
	description: 'Ping!',
	execute(message,args,listmember) {
		if(args.length==0){
			message.channel.send("./xp 'nome' '50000'");
        }
        
        console.log(args[0])

        var str = args[0];
        str = str.replace("<", "");
        str = str.replace(">", "");
        str = str.replace("@", "");
        str = str.replace("!", "");
        
		if(gerenciadorUsuario.verificaList(str)){

			if(args[1]>0)
			{
                let user = gerenciadorUsuario.getUsuario(str);
                gerenciadorUsuario.addXpUsuario(user,args[1]);
				message.channel.send("xp adicionado");
			}
		

		}

	},
};