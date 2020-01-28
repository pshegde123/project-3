import React from 'react';
import './style.css'
import { 
  Card, Button, CardImg, CardTitle, CardText,   CardSubtitle, CardBody
} from 'reactstrap';


function GenreCard(props) {
  return (
    <Card>
      <CardImg style={{ size: '50px' }} src={props.image} alt="Card image cap" />
      <CardBody>
        <CardTitle style={{ fontSize: '25px' }}>{props.name}</CardTitle>
        <CardSubtitle>Games count: {props.games_count}</CardSubtitle>
        <CardText>
          <li>Top Game: {props.top_one}, Users: {props.top_one_users}</li>
          <li>Top Game: {props.top_two}, Users: {props.two_users}</li>
          <li>Top Game: {props.top_three}, Users: {props.top_three_users}</li>
        </CardText>
        <Button>Checkout</Button>
      </CardBody>
    </Card>
  );
}

export default GenreCard;
