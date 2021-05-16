import React from 'react'
import $t from '../../translation/Translation'

function LinkToInteractive() {
    return (
        <div>
            <a style={{display: 'flex', padding: '1.5em 2em', margin: '-16vh 12em 8vh', backgroundColor: 'lightgray', 
                        borderRadius: '0.5em', fontSize: '1.5em', justifyContent: 'space-between', alignItems: 'center',}} 
                        href="https://www.thiagomaia.tk/" rel="noopener noreferrer">
                            {$t('seeInteractiveVersion')}
                <div style={{width: '8vw', height: '8vw',}}>
                    <img src={require(`../images/projects/Portfolio.svg`).default}/>
                </div>
            </a>
        </div>
    )
}

export default LinkToInteractive

