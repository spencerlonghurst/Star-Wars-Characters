import React from 'react';
import styled from 'styled-components';


const StyledName = styled.h2 `
    &: hover {
        color: white;
        text-shadow: none;
    }
`

const StyledP = styled.p `
    display: flex;
    justify-content: center;P
    &: hover {
        color: black;
        text-shadow: none;
        
    }
`



export default function Character (props) {
  const { character } = props
    return (
        <div>
            <StyledName>Name: {character.name}</StyledName>
            <StyledP>Birth Year: {character.birth_year}</StyledP>
            <StyledP>Height: {character.height}</StyledP>
            <StyledP>Mass: {character.mass}</StyledP>
        </div>
    )
}