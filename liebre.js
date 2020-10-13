import Corredor from "./corredor.js"

export default class Liebre extends Corredor{
    constructor({n})
    {   
        super({n})
    }


    Go()
    {
        let r = this.RandomNumber()

        if(r>0 && r<21)
            return 0;
        else if(r<41)
            return 9;
        else if(r<51)
            return -12;
        else if(r<66)
            return -2;
        else
            return 1;

    }
}
