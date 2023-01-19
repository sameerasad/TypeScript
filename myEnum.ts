import { symbolName } from "typescript"

enum seatChioce {
    aisle,
    middle,
    window,
}

function mySeat(){
   console.log(seatChioce.aisle);
}
mySeat();
