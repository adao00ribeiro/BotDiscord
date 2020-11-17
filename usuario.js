//end requere

module.exports = class usuario {

    //propriedades e funções da classe aqui
    constructor(_id,_name,_thumbnail,_nivel,_xp) {
        this.id = _id;
        this.setName(_name);
        this.setThumbnail(_thumbnail);
        this.setNivel(_nivel);
        this.setXp(_xp);
    }
    getId(){
        return _id;
    }
    getName(){
        return this.name;
    }
    getAvatar(){
        return this.thumbnail;
    }
    getNivel(){
        return this.nivel;
    }
    getXp(){
        return this.xp;
    }
    setName(_name){
        this.name = _name;
    }
    setThumbnail(_thumbnail){
        this.thumbnail = _thumbnail;
    }
    setNivel(_nivel){
        this.nivel = _nivel;
    }
    setXp(_xp){
        this.xp = _xp;
    }

  };
  