module.exports = {
    name: 'chamaumviado',
    description: 'Salva Tags',
    execute(message,chanel,args,listmember,tagArray){

                const numberrand = Math.floor(Math.random() * listmember.length)
				console.log(numberrand)
                message.channel.send(`<@${listmember[numberrand]}>`)
                    
    },
    
};