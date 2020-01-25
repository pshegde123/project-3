import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, CardImgOverlay
} from 'reactstrap';


function GenreCard(props){
    return(
        <Card inverse> 
        <CardImg  src={props.image} alt="Card image cap"/>
        <CardImgOverlay>
          <CardTitle><strong>{props.name}</strong></CardTitle>
          <CardSubtitle>Games count:{props.games_count}</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Checkout</Button>
        </CardImgOverlay>
      </Card> 
    );
}

export default GenreCard;