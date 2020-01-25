import axios from "axios";

export default {
    getAllGenres: function()
    {
        return axios({
                        "method": "GET",
                        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
                        "headers": {
                                "content-type": "application/octet-stream",
                                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                                "x-rapidapi-key": "91048f5edcmshbb3ad5482ca6475p1f5763jsn3f223f4eabf9"
                        }
                })
    }
};