import axios from 'axios';

import serverConfig from "./server-config.json";

const MAIN_API_BASE_URL = serverConfig.host + "/api/library";

class RuleLibraryService {



   
    
    getElements(){
        return axios.get(MAIN_API_BASE_URL + "/elements/")
    }

    getElementPortfolio(elementId: String) {
        return axios.get(MAIN_API_BASE_URL + "/element/" + elementId)
    }

    getRules() {
        return axios.get(MAIN_API_BASE_URL + "/rules/")
    }



}

export default new RuleLibraryService()