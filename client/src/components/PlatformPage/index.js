import React,{Component} from "react";
import API from "../../utils/API";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class PlatformPage extends Component{
    state = {
        games: [],
        name:'',
        description:''
    }

    componentDidMount(){
        const {match:{params}} = this.props;
        //console.log("params=",params.platform);
        API.getPlatformGames(params.platform).then((response) => {
            //console.log("response=",response);
            //this.setState({ games: response.data.results})
            this.setState({ name: response.data.name, description:response.data.description})
        })
            .catch((error) => {
                console.log(error)
            })
    }

    render(){
        return (
              <div className="container text-white">
                <h3>Games for {this.state.name}</h3>
                {ReactHtmlParser(this.state.description)}
              </div>  
        );
        /*return (
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
            );    */
    }
  };
  

export default PlatformPage;