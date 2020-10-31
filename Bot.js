const Discord = require("discord.js");
const config = require("./config.json");
const fs = require('fs');


//end requere

module.exports = class Bot {

  
  //propriedades e funções da classe aqui
  constructor() {
    this.client = new Discord.Client();
    this.client.commands = new Discord.Collection();
    this.prepareCommands();
    this.tagArray = []; // empty array
    this.imagensArray;
    this.tagArray.push({name: 'imagemloco' , link: 'https://img.ibxk.com.br/2016/02/24/24120655953583.jpg?w=1120&h=420&mode=crop&scale=both'});
  }

  prepareCommands(){
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      this.client.commands.set(command.name, command);
    }
    
  }


  ready() {
    this.client.on("ready", () => {
      // Get the Guild and store it under the variable "list"

        this.client.channels.cache.get("762762277584633878").send("Pai ta on no Off-Topic");
      //this.client.channels.cache.get("762762277584633883").send("ACORDEI ...... BOM DIA")
     
      console.log("iniciado");


      
      this.client.user.setActivity(`ALO PROGRAMADOR`);
    });

    
  }
  welcome(){

    this.client.on("guildMemberAdd",async (member) => {
    let guild  = this.client.guilds.cache.get("761230196413038632");
    let chanel = this.client.chanel.chanel.get("761230196413038636");
      console.log("bom vindo");
    await chanel.send("bem vindo");
    });
  }

  message() {

    this.client.on("message", async message => {
      //if (message.webhookID != null) {
       // const m = await message.channel.send(embed.fields["0"].name);
    //  }
      if (message.author.bot) return;
      if (message.channel.type === "dm") return;
      if (!message.content.startsWith(config["bot!"].prefix)) return;
      const args = message.content.slice(config["bot!"].prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
  
      const list = this.client.guilds.cache.map(guild => guild);
      
      // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
      const listmember = [];
       list[2].members.cache.forEach(member =>
        
        
        listmember.push(member.user.id)); 

        console.log(listmember);
        let chanel = this.client.channels.cache.get("771917027447275540");
      if (!this.client.commands.has(command)) return;

      try {
        this.client.commands.get(command).execute(message,chanel,args,listmember,this.tagArray);
      } catch (error) {
        console.error(error);
        message.reply('Escreve direito seu burro! fazendo favor');
      }
    });
  }


  login() {
    this.client.login(config["bot!"].token);
  }
}

/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}