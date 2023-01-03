import axios from 'axios';
import Pos from '../interfaces/Pos';
import serverConfig from "./server-config.json";

const MAIN_API_BASE_URL = serverConfig.host + "/api";

class MainService {



    // startNewGame(name) {
    //     return axios.get(MAIN_API_BASE_URL + "/newgame/" + name)
    // }

    // startNewGameWithParams(name, params) {
    //     return axios.post(MAIN_API_BASE_URL + "/newgame/" + name, params)
    // }

    // joinGame(gameId, name) {
    //     return axios.get(MAIN_API_BASE_URL + "/joingame/" + gameId + "/" + name)
    // }
    newGame(){
        return axios.get(MAIN_API_BASE_URL + "/newGame/")
    }

    getGameData() {
        return axios.get(MAIN_API_BASE_URL + "/gameData/")
    }

    randomDraw() {
        return axios.get(MAIN_API_BASE_URL + "/randomDraw/")
    }

    endTurn() {
        return axios.get(MAIN_API_BASE_URL + "/endTurn/")
    }

    draw(cardId:string,x:number,y:number) {
        return axios.get(MAIN_API_BASE_URL + "/draw/"+cardId + "/" + x + "/"+y);
    }

    // getUpdateCheck(gameId) {
    //     return axios.get(MAIN_API_BASE_URL + "/updateCheck/" + gameId, { headers: this.authHeader() })
    // }

    // getGameData(gameId) {
    //     return axios.get(MAIN_API_BASE_URL + "/gameData/" + gameId, { headers: this.authHeader() })
    // }

    // play(gameId, draw) {
    //     return axios.post(MAIN_API_BASE_URL + "/play/" + gameId, draw, { headers: this.authHeader() })
    // }

    // generatePiece(seed) {
    //     return axios.get(MAIN_API_BASE_URL + "/generatepiece/" + seed);
    // }

    // findPiece(serial) {
    //     return axios.get(MAIN_API_BASE_URL + "/findpiece/" + serial);
    // }

    // getGameEntry(seed, width, height) {
    //     return axios.get(MAIN_API_BASE_URL + "/gameentry/" + seed + "/" + width + "/" + height);
    // }

    // authHeader() {
    //     const user = JSON.parse(localStorage.getItem("auth"));

    //     if (user && user.accessToken) {
    //         return { Authorization: "Bearer " + user.accessToken };
    //     }
    //     return {};
    // }


}

export default new MainService()