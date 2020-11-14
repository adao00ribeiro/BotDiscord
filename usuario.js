//end requere

module.exports = class usuario {

    //propriedades e funções da classe aqui
    constructor(_id,_nivel,_xp) {
        this.id = _id;
        this.setNivel(_nivel);
        this.setXp(_xp);
    }
    getId(){
        return _id;
    }
    setNivel(_nivel){
        this.nivel = _nivel;
    }
    setXp(_xp){
        this.xp = _xp;
    }

  };
  