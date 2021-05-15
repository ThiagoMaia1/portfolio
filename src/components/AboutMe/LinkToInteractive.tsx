import React from 'react'

function LinkToInteractive() {
    return (
        <div>
            <a style={{display: 'flex', padding: '1.5em 2em', margin: '0 12em 5em', backgroundColor: 'lightgray', 
                        borderRadius: '0.5em', fontSize: '1.5em', justifyContent: 'space-between', alignItems: 'center',}} 
                        href="https://www.thiagomaia.tk/" rel="noopener noreferrer">
                            See the full interactive version of this portfolio at www.thiagomaia.tk.
                <div style={{width: '8vw', height: '8vw',}}>
                    <img src={require(`../images/projects/Portfolio.svg`).default}/>
                </div>
            </a>
        </div>
    )
}

export default LinkToInteractive

