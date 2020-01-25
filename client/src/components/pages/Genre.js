import React, { Component } from "react";
import axios from 'axios';
import { CardDeck, Container, Row, Col } from 'reactstrap';
import {
        Card, Button, CardImg, CardTitle, CardText, CardColumns,
        CardSubtitle, CardBody, CardImgOverlay
} from 'reactstrap';
import API from '../../utils/API';

import GenreCard from "../GenreCard";

class Genre extends Component {
        state = {
                genres: []
        }

        componentDidMount() {
                        API.getAllGenres().then((response) => {
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