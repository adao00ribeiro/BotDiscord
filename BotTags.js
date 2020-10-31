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

    this.tagArray.push({name: 'imagemloco' , link: 'https://img.ibxk.com.br/2016/02/24/24120655953583.jpg?w=1120&h=420&mode=crop&scale=both'});
  }

  prepareCommands(){
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      this.client.commands.set(command.name,command);
    }
    
  }


  ready() {
    this.client.on("ready", () => {
      console.log('Ready!');
      this.client.user.setActivity(`ALO PROGRAMADOR`);
    });
  }


  message() {

    this.client.on("message", async message => {
      if (message.webhookID != null) {
        const m = await message.channel.send(embed.fields["0"].name);
      }
      if (message.author.bot) return;
      if (message.channel.type === "dm") return;
      if (!message.content.startsWith(config["bot!"].prefix)) return;
      const args = message.content.slice(config["bot!"].prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();
     
      console.log(args);
      console.log(command);

      if (!this.client.commands.has(command))
      {
        return;
      }
      try {
        this.client.commands.get(command).execute(message,args,this.tagArray);
      } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
      }
    });
  }


  login() {
    this.client.login(config["bot!"].token);
  }
}