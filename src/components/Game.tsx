import React, { Component} from 'react';
import mainService from '../service/main.service';
import GameDataDTO from '../interfaces/DTO/GameDataDTO';
import MapView from './Map/MapView';
import HandView from './Hand/HandView';
import Card from '../interfaces/Card';
import Pos from '../interfaces/Pos';
import { Button } from '@mui/material';

interface GameProps {

}

interface GameState {
    gameDataDTO?:GameDataDTO;
    selectedCard?:Card
}

class Game extends Component<GameProps, GameState>  {

    constructor(props:GameProps){
        super(props);
        this.state={
            gameDataDTO:undefined,
            selectedCard:undefined
        };

        this.randomDraw = this.randomDraw.bind(this);
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

    handleCardSelect(card:Card){
        const {gameDataDTO} = this.state;
        if(gameDataDTO?.hand.cards.includes(card)){
            this.setState({selectedCard:card});
        }
    }

    handlePlaceCard(pos:Pos){
        const {selectedCard} = this.state;
        console.log(pos);
        if(selectedCard){
            mainService.draw(selectedCard.cardId,pos.x,pos.y).then((res) => {
                this.updateGameData();
            });
        }
    }

    mouseOn(pos:Pos){

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
                <MapView mouseOn={this.mouseOn} handlePlaceCard={this.handlePlaceCard}  map={gameDataDTO.map} ></MapView>
                <div>{gameDataDTO.turn.name}{"s Turn"}</div>
                <HandView handleCardSelect={this.handleCardSelect} selectedCard={selectedCard} hand={gameDataDTO.hand}></HandView>
                <button onClick={this.randomDraw}>random draw</button>
            </div>);
        }
    }
}

export default Game;
