import Link from 'next/link';
import React, { Component} from 'react';
import Element from '../../interfaces/Element';
import Rule from '../../interfaces/Rule';
import ruleLibraryService from '../../service/rule-library.service';
import ElementView from '../Card/ElementView';


interface LibraryProps {

}

interface LibraryState {
    elements?:Element[]
    rules?:Rule[]
}

class Library extends Component<LibraryProps, LibraryState>  {

    constructor(props:LibraryProps){
        super(props);
        this.state={
            elements:undefined
        };
    }
    
    componentDidMount() {
        ruleLibraryService.getElements().then((res) => {
            this.setState({elements:res.data})
        });

        ruleLibraryService.getRules().then((res) => {
            this.setState({rules:res.data})
        });

    }

 

    render() {
        const {elements,rules} = this.state;

            return (
                <div style={{alignItems: "center"}}>

                <h1>Library of Rules</h1>
                <p>Elements: </p>
                {elements?.map((element:Element)=>{
                    return <>
                    <Link href={'/library/elements/'+element.type.name}>
                        <ElementView element={element}></ElementView>
                    </Link>
                    {' '}
                    </>
                })}

                <p>Rules: </p>
                {rules?.map((rule:Rule)=>{
                    return <div style={{marginTop:"10px"}}>
                    <Link href={'/library/elements/'+rule.element.type.name}>
                        <ElementView element={rule.element}></ElementView>
                    </Link>
                    <> can placed over </>
                    <Link href={'/library/elements/'+rule.beforeElement.type.name}>
                        <ElementView element={rule.beforeElement} ></ElementView>
                    </Link>
                    <> if </>{rule.description}
                    </div>
                })}
            </div>);
    }
}

export default Library;
