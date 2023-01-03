import React, { Component} from 'react';
import mainService from '../service/main.service';
import GameDataDTO from '../interfaces/DTO/GameDataDTO';
import MapView from './Map/MapView';
import HandView from './Hand/HandView';
import Card from '../interfaces/Card';
import Pos from '../interfaces/Pos';

interface GameProps {

}

interface GameState {
    gameDataDTO?:GameDataDTO;
    selectedCard?:Card;
    mousePos?:Pos;
}

class Game extends Component<GameProps, GameState>  {

    constructor(props:GameProps){
        super(props);
        this.state={
            gameDataDTO:undefined,
            selectedCard:undefined,
        };

        this.randomDraw = this.randomDraw.bind(this);
        this.endTurn = this.endTurn.bind(this);
        this.handleCardSelect = this.handleCardSelect.bind(this);
        this.handlePlaceCard = this.handlePlaceCard.bind(this);
        this.newGame = this.newGame.bind(this);
    }
    
    componentDidMount() {
        this.updateGameData();
        // const loadTimer = setInterval(() => {
        //     this.updateGameData();

        // }, 1000);
    }

    //check for ugameupdate
    updateGameData() {
        mainService.getGameData().then((res) => {
            this.setState({gameDataDTO:res.data});
        });
    }

    randomDraw(){
        mainService.randomDraw().then((res) => {
            this.updateGameData();
        });
    }

    endTurn(){
        mainService.endTurn().then((res) => {
            this.updateGameData();
        });
    }

    handleCardSelect(card:Card){
        const {gameDataDTO,selectedCard} = this.state;
        if(selectedCard?.cardId===card.cardId){
            this.setState({selectedCard:undefined});
        } else if(gameDataDTO?.hand.cards.includes(card)){
            this.setState({selectedCard:card});
        }
    }

    handlePlaceCard(pos:Pos){
        const {selectedCard} = this.state;
       // console.log(pos);
        if(selectedCard){
            const cardW = selectedCard.operation.length;
            const cardH = selectedCard.operation[0].length;
            const mx=pos.x-Math.round(cardW/2-0.01);
            const my=pos.y-Math.round(cardH/2-0.01);   


            mainService.draw(selectedCard.cardId,mx,my).then((res) => {
                this.setState({selectedCard:undefined});
                this.updateGameData();
            });
        }
    }



    newGame(){
        mainService.newGame().then((res) => {
           this.updateGameData();
        });
    }


    render() {
        const {gameDataDTO,selectedCard} = this.state;
        if(gameDataDTO){
            return (
                <div style={{alignItems: "center"}}>
                <button onClick={this.newGame}>new Game</button>
                <MapView handlePlaceCard={this.handlePlaceCard} map={gameDataDTO.map} selectedCard={selectedCard} ></MapView>
                <div>{gameDataDTO.turn.name}{" Turn"}</div>
                <HandView handleCardSelect={this.handleCardSelect} selectedCard={selectedCard} hand={gameDataDTO.hand}></HandView>
                <button onClick={this.endTurn}>endTurn</button>
                <button onClick={this.randomDraw}>random draw</button>
            </div>);
        }
    }
}

export default Game;
