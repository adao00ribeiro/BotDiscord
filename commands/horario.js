module.exports = {
    name: 'horario',
    description: 'Salva Tags',
    execute(message){
        const options = {
            timeZone: 'America/Sao_Paulo',
            hour: 'numeric',
            minute: 'numeric'
        };
        const date = new Intl.DateTimeFormat([], options);
        
        message.channel.send(date.format(new Date())+" BOA NOITE BOTS");
    },
    
};