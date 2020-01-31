import React, { Component } from "react";
import { CardColumns } from 'reactstrap';
import API from '../../utils/API';
import GameCard from '../../components/GameCard';


class Games extends Component {
    state = {
        games: []
    }

    componentDidMount() {
        API.getAllGames().then((response) => {
            this.setState({ games: response.data.results})
        })
            .catch((error) => {
                console.log(error)
            })
    }


render() {
        return (
        <CardColumns>
            {this.state.games.map(game => <GameCard 
            url={game.clip.clips.full}
            name={game.name}
            rating={game.rating}
            metascore={game.metacritic}
            users={game.added}
            platforms={game.platforms} 
            />)}
        </CardColumns>
        );
}
};

export default Games;