import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';
  import './style.css';
  
function ProfileCard(props)
{
      return(
      <div>
        <Card className='savedCard'>
          <CardImg top width="100%" src={props.image} alt="Card image cap" />
          <CardBody className='body'>
            <CardTitle className="title">{props.name}</CardTitle>
            <CardText>Meta:{props.metascore}</CardText>
            <Button color='danger' onClick={()=>props.removeCard(props.id)}>Delete</Button>
          </CardBody>
        </Card>
        </div>);
}

export default ProfileCard;