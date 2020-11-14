const Discord = require("discord.js");
const Cgerenciador = require("../gerenciadorUsuario");
module.exports = {
    name: 'rank',
    description: 'Salva Tags',
    execute(message){
   
const webhookClient = new Discord.WebhookClient("777148611900604427", "iQVkuRuv1p0xWAHb8IcanzMOE2thX5qTcwpi5-af8k8fIJAsdS318QRxYmE8QTuDiZIo");
const listembed = []
for(var i = 0 ; i< 4; i++){
    const embed2 = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setAuthor('----- '+(i + 1)+' -----')
    .setTitle('Luiz Bueno')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addFields(
	
		{ name: 'Nivel', value: '8', inline: true },
        { name: 'Xp', value: '5000', inline: true },
       
	)
    listembed.push(embed2)
}

webhookClient.send('Rank', {
	username: 'Eva Clone',
	avatarURL: 'https://i.imgur.com/wSTFkRM.png',
	embeds: listembed,
});
     
        
    }
    
};