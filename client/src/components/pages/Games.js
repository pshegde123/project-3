import React, { Component } from "react";
import { Row,Col, CardColumns } from 'reactstrap';
import API from '../../utils/API';
import GameCard from '../../components/GameCard';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons' 
library.add(fab);


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