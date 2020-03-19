import React from "react";
import styled, { css } from "styled-components";
import {
  Card, CardImg, CardHeader, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Col} from 'reactstrap';

const StyledP = styled.p`
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: ${props => props.banana ? "white" : "blue"};
`;

function Bottom({img, explanation}) {
  return (
    <div className="Bottom">
    <Col xs="12">
      <Card width="500px">
        <CardHeader>Photo of the day - NASA</CardHeader>
        <img src={img} alt="Nasa"/>
        <CardText>
          <StyledP banana><p>{explanation}</p></StyledP>
        </CardText>
      </Card>
    </Col>
    </div>
  );
}

export default Bottom;
