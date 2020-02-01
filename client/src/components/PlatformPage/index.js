import React, { Component } from "react";
import API from "../../utils/API";
import ReactHtmlParser from 'react-html-parser';
import { CardColumns } from 'reactstrap';
import GameCard from '../../components/GameCard';

class PlatformPage extends Component {
    state = {
        games:[],
        id: '',
        name: '',
        description: ''
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        //console.log("params=",params.platform);
        API.getPlatformDetails(params.platform).then((response) => {
            //console.log("response=",response);
            //this.setState({ games: response.data.results})
            this.setState({
                name: response.data.name,
                description: response.data.description,
                id: response.data.id
            })
        }).catch((error) => {
            console.log(error)
        })

             //From API get available list of games for current platform id
        /*API.getAllPlatforms().then((response) => {
            //this.setState({ games: response.data.results})
            const currPltResults = response.data.results;
            const currPltDetails = currPltResults.filter(myrow => myrow.id === this.state.id);
            console.log("results=",currPltDetails[0].games);
            this.setState({
                listOfPltGames : currPltDetails[0].games
            })
            console.log("this.state.listOfPltGame=",this.state.listOfPltGames);
        }).catch((error) => {
            console.log(error)
        })*/
        
        //Get a list of games for the current platform.
        API.getAllGames().then((response) => {
            const supportedGames=[];
            const allGames = response.data.results;
            //console.log("allGames=",allGames);
            for(let iter=0;iter<allGames.length;iter++){
                const platformSupported = allGames[iter].platforms;
                //console.log("platformSupported=",platformSupported);
                for (let iterPLT=0;iterPLT<platformSupported.length;iterPLT++)
                {
                    if(platformSupported[iterPLT].platform.id === this.state.id)
                    {
                        supportedGames.push(allGames[iter]);
                        console.log("supportedGames=",supportedGames);

                    }
                }
            }
            this.setState({games:supportedGames});

        }).catch((error) =>{
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container text-white">
                <h3>Games for {this.state.name}</h3>
                {ReactHtmlParser(this.state.description)}
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
            </div>
        );
    }
};

export default PlatformPage;