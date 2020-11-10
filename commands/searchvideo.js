const search = require( 'yt-search' )


module.exports = {
    name: 'video',
    description: 'Salva Tags',
    execute(message,args,listmember,tagArray){
        let chanelOfftopic = message.client.channels.cache.get("771917027447275540");
        let  stringb  = ' ';
        for (let letter of args) {
            stringb += letter + " "
        }
        try {
            search(stringb, (err, result) => {
                if (err) {
                  throw err;
                } else if (result && result.videos.length > 0) {
                  const song = result.videos[0];
                if(message.member.roles.cache.has("763517343212634153")){
                    message.channel.send(song.url);
                }else
                {
                    chanelOfftopic.send(song.url);
                }
                }}
              );
        } catch (error) {
            message.channel.send(error);
            console.error(error);
        }


    },
    
};