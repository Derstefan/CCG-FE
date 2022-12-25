import React, { useState } from 'react';
import Cell from '../../interfaces/Cell';
import Pos from '../../interfaces/Pos';


interface CellViewProps {
    cell: Cell;
    handlePlaceCard:(pos:Pos)=>void
    mouseOn:(pos:Pos)=>void
}


function CellView(props:CellViewProps){
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
       //send info to Mapview
       props.mouseOn(props.cell.pos);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    
    var style = {
        margin:10,
        fontWeight: isHover? 'bold' : 'normal',
        backgroundColor:"gray",
        border: "1px solid",
        width: "1.5em",
        height: "1.5em",
        cursor: "pointer"
    }
    if(props.cell){

    if(props.cell.element===null || props.cell.element===undefined){
        
        return (
            <td onClick={()=>props.handlePlaceCard(props.cell.pos)} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={style}>
                {"-"}
            </td>
        );
    } 
    if(props.cell.element.type.color!==null){
    style.backgroundColor=props.cell.element.type.color+"";
    }
    return (
        
        <td onClick={()=>props.handlePlaceCard(props.cell.pos)}            onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} style={style}>
            {props.cell.element.type.name}
        </td>
    );
            
}
return <></>;


};

export default CellView;
