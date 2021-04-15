import { useState } from 'react';
import styled from 'styled-components';

enum Directions {
    Up = -1,
    Down = 1,
    Left = -2,
    Right = 2,
}

const Container = styled.div`
    background-color: white;
    color: lightgray;
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
`;

function ExpandArrow({iconSize, direction = Directions.Down, callback} 
    : {iconSize : number, direction ?: Directions, callback ?: (isExpanded : boolean) => void}) {

    let [isExpanded, setIsExpanded] = useState(false);

    const ArrowIcon = require('react-icons/md')[`MdKeyboardArrow${Directions[direction*(isExpanded ? -1 : 1)]}`];

    return (
        <Container onClick={() => {
            setIsExpanded(e => {
                let newIsExpanded = !e;
                callback?.(newIsExpanded);
                return newIsExpanded;
            });
        }}>
            <ArrowIcon size={iconSize}/>
        </Container>
    )
}

export default ExpandArrow;
