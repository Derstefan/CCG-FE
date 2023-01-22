import Link from 'next/dist/client/link';
import React, { Component} from 'react';
import ElementPortFolioDTO from '../../interfaces/DTO/ElementPortFolioDTO';
import Element from '../../interfaces/Element';
import Rule from '../../interfaces/Rule';
import ruleLibraryService from '../../service/rule-library.service';
import ElementView from '../Card/ElementView';
import Router from 'next/router'




interface ElementPortFolioProps {
    elementId:string
}

interface ElementPortFolioState {
    elementPortFolio?:ElementPortFolioDTO;
}

class ElementPortFolio extends Component<ElementPortFolioProps, ElementPortFolioState>  {

    constructor(props:ElementPortFolioProps){
        super(props);
        this.state={
            elementPortFolio:undefined,
        };


    }
    
    componentDidMount() {
        const {elementId} = this.props;
        ruleLibraryService.getElementPortfolio(elementId).then((res) => {
            this.setState({elementPortFolio:res.data})
        });
    }

 

    render() {
        const {elementPortFolio} = this.state;
        if(elementPortFolio){
            return (
                <div style={{textAlign:"center"}}>
                    <h2>Element {elementPortFolio?.element.description}</h2>
                    <Link href={'/library/elements/'+elementPortFolio?.element.id}>
                <ElementView element={elementPortFolio?.element}></ElementView>
                </Link>
                <p>Can place over these Elements </p>
                
                {elementPortFolio?.canPutOverElements.map((element:Element)=>{
                    return <>
                    <Link href={'/library/elements/'+element.id}>
                        <ElementView element={element}></ElementView>
                    </Link>
                    {' '}
                    </>
                })}

                <p>Rules</p>
                {elementPortFolio?.rules.map((rule:Rule)=>{
                    return <div style={{marginTop:"10px"}}>
                        <>over </>
                        <Link replace={true} href={'/library/elements/'+rule.beforeElement.id}>
                            <ElementView element={rule.beforeElement}></ElementView>
                        </Link>
                        <> if </>{rule.description}
                        </div>

                    
                })}
            </div>);
        }
        return "no Element found";
    }
}

export default ElementPortFolio;
