import axios from "axios";
const userHeader = {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "91048f5edcmshbb3ad5482ca6475p1f5763jsn3f223f4eabf9"
};

export default {
    getAllGenres: function () {
        return axios({
            "method": "GET",
            "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
            "headers": userHeader
        })
    },
    getAllPlatforms: function () {
        return axios({
            "method": "GET",
            "url": "https://rawg-video-games-database.p.rapidapi.com/platforms",
            "headers": userHeader
        })
    },
    getAllGames:function(){
        return axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games",
            "headers": userHeader
        })
    },
    getAutocompleteResult:function(query){
        return axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games?search="+query,
            "headers": userHeader
        })
    },
    getPlatformDetails:function(param){
        return axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/platforms/"+param,
            "headers": userHeader
        })
    },
    getGameDetails:function(id){
        return axios({
            "method":"GET",
            "url":"https://rawg-video-games-database.p.rapidapi.com/games/"+id,
            "headers": userHeader
        })
    }
};