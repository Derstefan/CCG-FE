import React from 'react';
import Cell from '../../interfaces/Cell';
import Element from '../../interfaces/Element';
import Map from '../../interfaces/Map';
import Pos from '../../interfaces/Pos';
import CellView from './CellView';

interface MapViewProps {
    map?: Map;
    handlePlaceCard:(pos:Pos)=>void
    mouseOn:(pos:Pos)=>void
}




function MapView(props:MapViewProps){


const style={
    fontFamily:"Courier New",
    justifyContent: "center"

};

    if(props.map){
    return (
        <table style={{ borderSpacing: 0, borderCollapse: "collapse", marginLeft: "auto",
        marginRight: "auto" }}>
        <tbody style={style}>
            {props.map.mapData.map((row: any) => {
                return <tr>{row.map((cell:Cell) => {
                    return <CellView mouseOn={props.mouseOn} handlePlaceCard={props.handlePlaceCard} cell={cell}></CellView>;
                })}</tr> ;
            })}
        </tbody>
        </table>
    );          
    }
    return <>noMap</>
};

export default MapView;
