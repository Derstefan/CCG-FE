
import React, { Component} from 'react';
import Element from '../../interfaces/Element';
import Rule from '../../interfaces/Rule';
import ruleLibraryService from '../../service/rule-library.service';
import "@react-sigma/core/lib/react-sigma.min.css";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer } from "@react-sigma/core";


interface ElementGraphProps {

}

interface ElementGraphState {
    elements?:Element[]
    rules?:Rule[]
}

class ElementGraph extends Component<ElementGraphProps, ElementGraphState>  {

    constructor(props:ElementGraphProps){
        super(props);
        this.state={
            elements:undefined,
            rules:undefined
        };
    }
    
    componentDidMount() {
        ruleLibraryService.getElements().then((res) => {
            this.setState({elements:res.data});
            ruleLibraryService.getRules().then((res) => {
                this.setState({rules:res.data})
            });
        });

    }

 

    render() {
        const {elements,rules} = this.state;


 
        
        const graph = new MultiDirectedGraph();

        elements?.forEach((element=>{
            graph.addNode(element.id,{x:Math.random(),y:Math.random(),size:15,label:element.id,color:element.color})
        }))

        
        var index =1;
        rules?.forEach((rule=>{
            index++;
            graph.addEdgeWithKey(index,rule.beforeElement.id,rule.element.id,{label:"SEES",color:"#111111"})
        }))




        if(rules){
            return (
                <div style={{alignItems: "center"}}>
                <SigmaContainer style={{ height: "800px" }} graph={graph}>
                    
                </SigmaContainer>
            
            </div>);
            }
            return "loading"
    }
}

export default ElementGraph;
