const google = require('googleapis').google
const customSearch = google.customsearch('v1')
const googleSearchCredentials = require('../config.json')

module.exports = {
    name: 'img',
    description: 'Salva Tags',
   async execute(message,args,listmember,tagArray){
    let chanelOfftopic = message.client.channels.cache.get("771917027447275540");
    let  stringb  = ' ';
    for (let letter of args) {
        stringb += letter + " "
    }
    //
    const imagensArray  = await fetchGoogleAndReturnImagesLinks(stringb);
    //console.log(imagensArray)
    async function fetchGoogleAndReturnImagesLinks(query) {
        const response = await customSearch.cse.list({
          auth: googleSearchCredentials.search.apiKey,
          cx: googleSearchCredentials.search.searchEngineId,
          q: query,
          searchType: 'image',
          start: Math.floor(Math.random() *10),
          //siteSearch: "www.xvideos.com.br",
          safe:"active",
          //siteSearchFilter: "e",
          num:10
        })
        if(response.data.items ==null){ 
            return null;
        }
        const imagensUrl = response.data.items.map((item)=>{
                const list = [];
                if(item.displayLink.indexOf("facebook")> -1){
                   // console.log("edo facebook")
                    list.push(item.image.thumbnailLink)
                }else{
                  //  console.log("nao e")
                    list.push(item.link)
                }
              
            return list
        })
        return imagensUrl
    }
    

    if(imagensArray == null){ 
        chanelOfftopic.send("Bloqueado");
        return;
    }
    if(message.member.roles.cache.has("763517343212634153")){
        message.channel.send(imagensArray[Math.floor(Math.random() * imagensArray.length)]);
    }else
    {
        chanelOfftopic.send(imagensArray[Math.floor(Math.random() * imagensArray.length)]);
    }
        
    },
    
};