import Corredor from "./corredor.js"

export default class Tortuga extends Corredor{
    constructor({n})
    {
        super({n})
    }


    Go()
    {
        let r = this.RandomNumber()
        if(r>0 && r<51)
            return 3;
        else if(r<71)
            return -6;
        else
            return 1;
    }
}
