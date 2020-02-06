import React, { Component } from "react";
import { Row, Col, CardColumns } from "reactstrap";
import API from "../../utils/API";
import ProfileCard from '../ProfileCard';


class Profile extends Component {
    state = {
        dbrecords: []
    };

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        API.getGamesDetails()
            .then(response => {
                //console.log("response=",response.data);
                this.setState({ dbrecords: response.data});
            })
            .catch(err => console.log(err));
    }

    removeCard = id => {
        const dbrecords = this.state.dbrecords.filter(record => record.id !== id);
        this.setState({ dbrecords });    

        //delete record from database
        API.removeGamesDetails(id)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err))
      };

    render() {
        //console.log("dbrecords=",this.state.dbrecords);
        return (
            <div className='container-fluid text-white'>
                <h1>Favorites</h1>
                <Row>
                <CardColumns>
                    {this.state.dbrecords.map(record => 
                    <ProfileCard 
                    key={record.id}
                    id={record.id}
                    name={record.name}
                    metascore={record.metascore}
                    image={record.image}
                    removeCard={this.removeCard}/>
                    )}
                </CardColumns>
                </Row>
            </div>
        )
    }
}

export default Profile;