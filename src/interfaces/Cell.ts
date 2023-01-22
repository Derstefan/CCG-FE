import Element from "./Element";
import Pos from "./Pos";

interface Cell{
    element:Element;
    pos:Pos;
    possibleChanges:String[];
}

export default Cell