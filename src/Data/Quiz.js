export class Quiz{
    #tipoDePregunta
    #pregunta
    #listaResp = []
    
    getPregunta(){
        return this.#pregunta
    }
    setPregunta(pregunta){
        this.#pregunta = pregunta
    }
    getResp(i){
        return this.#listaResp[i]   }
    pushResp(text){
        this.#listaResp.push(text);
    }
    getTipo(){
        return this.#tipoDePregunta;
    }
    setTipo(tipo){
        this.#tipoDePregunta = tipo;
    }
}