import React from 'react'
import '../styles/SectionTitle.scss';
import EmDash from './EmDash';

interface Props {
    text : string;
}

function SectionTitle(props: Props) {
    const {text} = props;

    return (
        <div className='section-title'>
            <div>{text}</div>
            <div><EmDash/></div>
        </div>
    )
}

export default SectionTitle
