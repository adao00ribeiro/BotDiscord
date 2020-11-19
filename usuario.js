//end requere

module.exports = class usuario {
    id;
    name;
    thumbnail;
    nivel;
    xp;
    //propriedades e funções da classe aqui
    constructor(_id,_name,_thumbnail,_nivel,_xp) {
        this.id = _id;
        this.name = _name
        this.thumbnail =_thumbnail
        this.nivel = _nivel
        this.xp = _xp
    }
 
  };
  