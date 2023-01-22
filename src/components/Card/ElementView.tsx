import React from 'react';
import Element from '../../interfaces/Element';


interface ElementViewProps {
    element: Element;
    date?:number;
}


function ElementView(props:ElementViewProps){
    
    
    var style = {
        margin:10,
        fontWeight: "bold",
        backgroundColor:"rgba(0,0,0,0.2)",
        border: "1px solid",
         width: "1em",
        height: "1em"
        
    }

    if(props.element===null || props.element===undefined){
        
        return (
            <td style={style}>
                {"-"}
            </td>
        );
    } 
    if(props.element.color!==null){
        style.backgroundColor=props.element.color+"";
    }
    return (

        <td style={style}>
            {props.element.id}
        </td>
    );
            


};

export default ElementView;
