import React from 'react';
import Hand from '../../interfaces/Hand';
import Card from '../../interfaces/Card';
import CardView from '../Card/CardView';
import Grid from '@mui/material/Grid';




interface HandViewProps {
    hand?: Hand;
    handleCardSelect:(card:Card) => void;
    selectedCard?:Card
}




function HandView(props:HandViewProps){




    if(props.hand){
    return (


        <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            {props.hand.cards.map((card: Card) => {
                 return <Grid xs={1} item>
                    <CardView selected={card.cardId===props.selectedCard?.cardId} handleCardSelect={props.handleCardSelect} card={card}></CardView>
                    </Grid>;
             })}
            <Grid item xs={3}></Grid>
        </Grid>
    );          
    }
    return <>emptyHand</>
};

export default HandView;
