const Discord = require("discord.js");
module.exports = {
    name: 'rank',
    description: 'Salva Tags',
    execute(message){
       
        const exampleEmbed = {
            color: 0x0099ff,
            title: 'Rank',
            url: 'https://images.vexels.com/media/users/3/194842/isolated/preview/584a5b3398eb79bff18ec85eff2c155a-capit--o-militar-rank---cone-by-vexels.png',
            author: {
                name: 'Hipoly',
                icon_url: 'https://images.vexels.com/media/users/3/194842/isolated/preview/584a5b3398eb79bff18ec85eff2c155a-capit--o-militar-rank---cone-by-vexels.png',
          
            },
            description: 'Essa é uma linda descrição',
            thumbnail: {
                url: message.guild.iconURL(),
            },
            fields: [
                {
                    name: 'Nome',
                    value: 'LUIZ BUENO',
                    inline: true
                },
              
                {
                    name: ' Nivel',
                    value: '  8  ',
                    inline: true
                },
                {
                    name: '--Xp--',
                    value: '5000',
                    inline: true
                },
                //aakdjkajdsa
                {
                    name: ' NOME',
                    value: 'LUIZ BUENO',
                    inline: true
                },
              
                {
                    name: ' Nivel',
                    value: '  8  ',
                    inline: true
                },
                {
                    name: '--Xp--',
                    value: '5000',
                    inline: true
                }, 
                  //aakdjkajdsa
                {
                    name: ' NOME',
                    value: 'LUIZ BUENO',
                    inline: true
                },
              
                {
                    name: ' Nivel',
                    value: '  8  ',
                    inline: true
                },
                {
                    name: '--Xp--',
                    value: '5000',
                    inline: true
                },
                  //aakdjkajdsa
                  {
                    name: ' NOME',
                    value: 'LUIZ BUENO',
                    inline: true
                },
              
                {
                    name: ' Nivel',
                    value: '  8  ',
                    inline: true
                },
                {
                    name: '--Xp--',
                    value: '5000',
                    inline: true
                },
                  //aakdjkajdsa
                  {
                    name: ' NOME',
                    value: 'LUIZ BUENO',
                    inline: true
                },
              
                {
                    name: ' Nivel',
                    value: '  8  ',
                    inline: true
                },
                {
                    name: '--Xp--',
                    value: '5000',
                    inline: true
                },
                  //aakdjkajdsa
                  {
                    name: ' NOME',
                    value: 'LUIZ BUENO',
                    inline: true
                },
              
                {
                    name: ' Nivel',
                    value: '  8  ',
                    inline: true
                },
                {
                    name: '--Xp--',
                    value: '5000',
                    inline: true
                },
                  //aakdjkajdsa
                  {
                    name: ' NOME',
                    value: 'LUIZ BUENO',
                    inline: true
                },
              
                {
                    name: ' Nivel',
                    value: '  8  ',
                    inline: true
                },
                {
                    name: '--Xp--',
                    value: '5000',
                    inline: true
                }
            ],
          
        };

            message.channel.send({ embed: exampleEmbed });
      
        
    },
    
};