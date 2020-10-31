
module.exports = {
	name: 'alou',
	description: 'Ping!',
	execute(message,args,listmember) {
		if(args.length==0){
			message.channel.send("quem é?");
		}
		
		if(args[0]=="bot"){

			if(args[1]=="omaisgay")
			{
				const numberrand = Math.floor(Math.random() * listmember.length);
				console.log(numberrand);
				message.channel.send("o mais gay é o :" + listmember[numberrand]);
				return;
			}
			message.channel.send("fala memo...");

		}

	},
};