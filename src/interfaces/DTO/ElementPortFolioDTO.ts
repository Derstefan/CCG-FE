import Element from "../Element";
import Rule from "../Rule";



interface ElementPortFolioDTO
{
    element:Element;
    canPutOverElements:Element[];
    rules:Rule[];
}

export default ElementPortFolioDTO;