import React, { useState } from 'react';
import Card from '../../interfaces/Card';
import Cell from '../../interfaces/Cell';
import Map from '../../interfaces/Map';
import Element from '../../interfaces/Element';
import Pos from '../../interfaces/Pos';
import CellView from './CellView';

interface MapViewProps {
    map?: Map;
    selectedCard?:Card;
    handlePlaceCard:(pos:Pos)=>void
}




function MapView(props:MapViewProps){
    const [mousePos, setMousePos] = useState<Pos>();
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    const style={
        fontFamily:"Courier New",
        justifyContent: "center"
    };

    if(props.map){
    return (
        <table style={{ borderSpacing: 0, borderCollapse: "collapse", marginLeft: "auto",
        marginRight: "auto" }}             onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <tbody style={style}>
            {props.map.mapData.map((row: any,i:number) => {
                return <tr>{row.map((cell:Cell,j:number) => {

                    if(isHover && props.selectedCard!==undefined && mousePos!==undefined){
                        
                        const cardW = props.selectedCard.operation.length;
                        const cardH = props.selectedCard.operation[0].length;
                        const mx=mousePos.x-Math.round(cardW/2-0.01);
                        const my=mousePos.y-Math.round(cardH/2-0.01);

                        if(mx<=i && my<=j && mx+cardW>i && my+cardH>j){
                            const element =props.selectedCard.operation[i-mx][j-my];
                            return <CellView mouseOn={setMousePos} handlePlaceCard={props.handlePlaceCard} cell={cell} showFocus={true} element={element}></CellView>;
                        }
                        return <CellView mouseOn={setMousePos} handlePlaceCard={props.handlePlaceCard} cell={cell} showFocus={true}></CellView>;
                    } else {
                        return <CellView mouseOn={setMousePos} handlePlaceCard={props.handlePlaceCard} cell={cell} showFocus={false}></CellView>;
                    }
                })}</tr> ;
            })}
        </tbody>
        </table>
    );          
    }
    return <>noMap</>
};

export default MapView;
