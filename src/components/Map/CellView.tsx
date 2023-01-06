import React, { useState } from 'react';
import Cell from '../../interfaces/Cell';
import EType from '../../interfaces/EType';
import Pos from '../../interfaces/Pos';


interface CellViewProps {
    cell: Cell;

    eType?:EType
    handlePlaceCard:(pos:Pos)=>void
    mouseOn:(pos:Pos)=>void
    showFocus:boolean
}


function CellView(props:CellViewProps){
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
       props.mouseOn(props.cell.pos);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    var style = {
        margin:10,
        fontWeight: isHover? 'bold' : 'normal',
        fontSize:"8px",
        backgroundColor:"gray",
        opacity:(props.showFocus)?0.4:1.0,
        border: "1px solid transparent",
        width: "1em",
        height: "1em",
        cursor: "pointer"
    }
    if(props.cell){

    
        style.backgroundColor=props.cell.element.type.color+"";
        var txt = props.cell.element.type.name;
        if(props.eType!==undefined){
            style.border= "1px solid black";
            if(props.cell.possibleChanges.filter((eType:EType)=>{return eType.name===props.eType?.name}).length>=1){
                style.backgroundColor=props.eType.color+"";
                style.opacity=1.0;
                txt=props.eType.name;
            }
        }
    return (
        
        <td 
        onClick={()=>{
            console.log(props.cell.possibleChanges);
        props.handlePlaceCard(props.cell.pos)
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={style}>
        {txt}
        </td>
    );
            
}
return <></>;


};

export default CellView;
