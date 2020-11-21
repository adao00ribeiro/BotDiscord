module.exports = {
  name: "xp",
  description: "Ping!",
  execute(message, args, listmember) {
    if (
      message.member.roles.cache.has("763517343212634153") ||
      message.member.roles.cache.has("762762277149474834")
    ) {
      const gerenciadorUsuario = require("../gerenciadorUsuario");
      const gerenciador = new gerenciadorUsuario();
      if (args.length == 0) {
        message.channel.send("./xp 'nome' '50000'");
      }

      console.log(args[0]);

      var str = args[0];
      str = str.replace("<", "");
      str = str.replace(">", "");
      str = str.replace("@", "");
      str = str.replace("!", "");
	  
      if (gerenciador.verificaList(str)) {
        if(parseInt(args[1])>10000){
          message.channel.send("xp maior que 10000 nao é aceito");
          return;
        }


        if (args[1] > 0) {
          gerenciador.addXpUsuario(str, parseInt(args[1]));
          message.channel.send("xp adicionado");
        }
      }
    } else {
      message.channel.send("Voce Nao Tem Permissão.");
    }
  },
};
