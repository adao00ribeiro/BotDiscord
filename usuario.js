//end requere

module.exports = class usuario {

    //propriedades e funções da classe aqui
    constructor(_id,_name,_nivel,_xp) {
        this.id = _id;
        this.setName(_name);
        this.setNivel(_nivel);
        this.setXp(_xp);
    }
    getId(){
        return _id;
    }
    setName(_name){
        this.name = _name;
    }
    setNivel(_nivel){
        this.nivel = _nivel;
    }
    setXp(_xp){
        this.xp = _xp;
    }

  };
  