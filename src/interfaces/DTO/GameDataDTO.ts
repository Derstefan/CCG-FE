import Hand from "../Hand";
import Map from "../Map";
import PlayerDTO from "./PlayerDTO";


interface GameDataDTO
{
    map:Map;
    hand:Hand;
    turn:PlayerDTO;
}

export default GameDataDTO;