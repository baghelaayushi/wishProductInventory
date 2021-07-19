import axios from 'axios';

const API_HOST = "https://merchant.wish.com"

/**
 * This is a helper api client to set paramters, 
 * url and everything else for the request
 * 
 * Change the access token to get the correct data
 */
export default class WishApiClient {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }

    doGet(path, params) {
        const configs = {
            headers: {
                Authorization: "access token"
            }
        }

        if(params) {
            configs.params = params;
        }

        const apiURl = API_HOST + path;

        return axios.get(apiURl, configs);
    }
}