import React from 'react';
import Element from '../../interfaces/Element';
import Card from '../../interfaces/Card';
import Paper from '@mui/material/Paper';
import ElementView from './ElementView';


interface CardViewProps {
    card?: Card;
    handleCardSelect:(card:Card) => void;
    selected:boolean;
}




function CardView(props:CardViewProps){


var style={
    backgroundColor: "rgb(190,120,120)" ,
    fontFamily:"Courier New",
    height:270,
    width:150,
    margin:10
};




const inner={
    height:190,
    width:110,
    padding:10,
    margin:5,
    marginLeft:10,
    marginRight:10,
    backgroundColor:  "rgb(180,140,110)" 
    
};

    if(props.card){
    const card = props.card;

        if(props.selected){
            style.height = 290;
            style.margin=5;
        }
    return (
        <div onClick={()=>props.handleCardSelect(card)}>
        <Paper style={style} >
            <Paper style ={inner} >
            <table className="chess-board"  style={{ borderSpacing: 0, borderCollapse: "collapse", marginLeft: "auto",
        marginRight: "auto" }}>
        <tbody>
            {props.card.operation.map((row: any) => {
                return <div>{row.map((element:Element) => {
                    return <ElementView element={element}></ElementView>;
                })}</div>
            })}
                    </tbody>
        </table>
            </Paper>
        </Paper>
        </div>
    );          
    }
    return <>noMap</>
};

export default CardView;
