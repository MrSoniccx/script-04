
import Liebre from "./liebre.js"
import Tortuga from "./tortuga.js"

class Main {
    constructor(tope)
    {
        this.tope = tope
    }


    LetsGo(){
        let win=0
        let uno = new Liebre(1)
        let dos = new Tortuga(1)
        let count1 = 0
        let count2 = 0
        while(win==0)
        {
            count1 += uno.Go()
            count2 += dos.Go()
            console.log("la liebre va en "+count1)
            console.log("la tortuga va en "+count2)
            if(count1 >=this.tope && count2 >=this.tope)
            {win = 3
            return "A sido un empate"}
            else if (count1 >=this.tope && count2 <this.tope)
            {win = 1
            return "A ganado la liebre"}
            else if (count1 <this.tope && count2 >=this.tope)
            {win = 2
            return "A ganado la tortuga"}

        }
    }
}

let start = new Main(90)

console.log(start.LetsGo())