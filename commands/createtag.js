module.exports = {
    name: 'tag',
    description: 'Salva Tags',

    execute(message,args, listmembers ,tagArray){
    if(args.length==0)
    {
            console.log("sem comandos");
        return;
    }
    //criando tag
    if(args[0]=="create")
    {   
       
            tagArray.push({name: args[1] , link: args[2]});
            message.channel.send("tag criada");
        

        return;
    }
    //usando tag
    tagArray.forEach(element => {
        if(element.name == args[0])
        {
            message.channel.send(element.link);
        }
    });


    },
    
};