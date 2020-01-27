import React, { Component } from "react";
import { CardColumns } from 'reactstrap';
import API from '../../utils/API';
import GenreCard from '../../components/GenreCard';

class Games extends Component {
    state = {
        games: []
    }

    componentDidMount() {
        API.getAllGames().then((response) => {
                console.log("All games:",response.data.results);
                this.setState({ games: response.data.results })
        })
                .catch((error) => {
                        console.log(error)
                })
}
    render() {
        return (
            <CardColumns>
                {this.state.games.map(game => <GenreCard
                    id={game.id}
                    name={game.name}
                    games_count={game.games_count}
                    image={game.background_image}
                   />)}
            </CardColumns>
        )
    }
};

export default Games;