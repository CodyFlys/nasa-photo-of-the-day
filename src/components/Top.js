import React from "react";
import styled, { css } from "styled-components";
import {Button} from 'reactstrap';
import {Badge} from 'reactstrap';

const StyledDate = styled.p`
margin-top: 2%;
margin-bottom: 2%;
`;


function change(date, setDate) {
    {setDate = date.now()}
    console.log(date);
}

function Top({title, date}) {
    return (        
    <div className="Top">
        <h1>{title} <Badge color="primary">NEW</Badge></h1>
        <StyledDate><Button color="primary" onClick={change}><h6>{date}</h6></Button></StyledDate>
    </div>
    );
}

export default Top;