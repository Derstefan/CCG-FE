import Element from "./Element";
import EType from "./EType";
import Pos from "./Pos";

interface Cell{
    element:Element;
    pos:Pos;
    possibleChanges:EType[];
}

export default Cell