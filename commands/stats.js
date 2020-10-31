const Discord = require("discord.js");
module.exports = {
    name: 'stats',
    description: 'Salva Tags',
    execute(message,client,args,listmember,tagArray){
        const name  = "";
        
        const Embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
      //  .setThumbnail(message.guild.iconURL)
    .setAuthor('🔍 Informações do servidor')
  // .addField('**Nome**',client.users.fetch('481967505510760458')., true)
  
  
 //  .addField('**ID**', message.guild.id, true)
  // .addField('**Dono(a)**', message.channel.guild.owner.user.nick)
  // .addField('**Região**', message.guild.region, true)
  // .addField('**Humanos | Bots**', `${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`)
 //   .addField('**Canais**', message.guild.channels.size, true)
  // .addField('**Cargos**', message.guild.roles.size, true)
//   .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
//   .addField('**Você entrou em**', formatDate('DD/MM/YYYY, às HH:mm:ss', joined))
   .setFooter('2020 HiPoly Community')
   .setTimestamp();

            message.channel.send(Embed);
      
        
    },
    
};






