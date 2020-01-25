import React, { Component } from "react";
import axios from 'axios';
import { CardDeck, Container, Row, Col } from 'reactstrap';
import {
        Card, Button, CardImg, CardTitle, CardText, CardColumns,
        CardSubtitle, CardBody, CardImgOverlay
} from 'reactstrap';

import GenreCard from "../GenreCard";

class Genre extends Component {
        state = {
                genres: []
        }

        componentDidMount() {
                axios({
                        "method": "GET",
                        "url": "https://rawg-video-games-database.p.rapidapi.com/genres",
                        "headers": {
                                "content-type": "application/octet-stream",
                                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                                "x-rapidapi-key": "91048f5edcmshbb3ad5482ca6475p1f5763jsn3f223f4eabf9"
                        }
                })
                        .then((response) => {
                                this.setState({ genres: response.data.results })
                        })
                        .catch((error) => {
                                console.log(error)
                        })
        }

        render() {
                return (
                        <CardColumns>
                                        {this.state.genres.map(genre => <GenreCard
                                                id={genre.id}
                                                name={genre.name}
                                                games_count={genre.games_count}
                                                image={genre.image_background}
                                        />)}
                        </CardColumns>
                );
        }
};

export default Genre;