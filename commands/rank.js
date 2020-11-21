const Discord = require("discord.js");
module.exports = {
  name: "rank",
  description: "Rankzao",
  execute(message ) {
    const GerenciadorUsuario = require("../gerenciadorUsuario");

    const Usuario = require("../usuario");

    const webhookClient = new Discord.WebhookClient(
      "777148611900604427",
      "iQVkuRuv1p0xWAHb8IcanzMOE2thX5qTcwpi5-af8k8fIJAsdS318QRxYmE8QTuDiZIo"
    );
    const listembed = [];
 
      
    for (var i = 0; i < GerenciadorUsuario.listUsuario.length; i++) {

    
      const embed2 = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setAuthor("----- " + (i + 1) + " -----")
        .setTitle(GerenciadorUsuario.listUsuario[i].name)
        .setThumbnail(GerenciadorUsuario.listUsuario[i].thumbnail)
        .addFields(
          {
            name: "Nivel",
            value: GerenciadorUsuario.listUsuario[i].nivel,
            inline: true,
          },
          {
            name: "  Xp  ",
            value: GerenciadorUsuario.listUsuario[i].xp,
            inline: true,
          }
        );
      listembed.push(embed2);
    }

    webhookClient.send("Rank", {
      username: "Eva Clone",
      avatarURL: "https://i.imgur.com/wSTFkRM.png",
      embeds: listembed,
    });
  },
};
