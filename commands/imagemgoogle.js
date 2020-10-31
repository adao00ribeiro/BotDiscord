const google = require('googleapis').google
const customSearch = google.customsearch('v1')
const googleSearchCredentials = require('../config.json')

module.exports = {
    name: 'img',
    description: 'Salva Tags',
   async execute(message,chanel,args,listmember,tagArray){
        

    const imagensArray  = await fetchGoogleAndReturnImagesLinks(args[0]);
    console.dir(imagensArray);
    async function fetchGoogleAndReturnImagesLinks(query) {
        const response = await customSearch.cse.list({
          auth: googleSearchCredentials.search.apiKey,
          cx: googleSearchCredentials.search.searchEngineId,
          q: query,
          searchType: 'image',
          start: Math.floor(Math.random() *100),
          siteSearch: "www.xvideos.com.br",
          safe:"active",
          siteSearchFilter: "e",
          num:10
        })
        
        const imagensUrl = response.data.items.map((item)=>{
                const list = [];
                list.push(item.link)
            return list
        })
        return imagensUrl
    }
  
    chanel.send(imagensArray[Math.floor(Math.random() * imagensArray.length)]);
    },
    
};