import getTranslatedSentence from '../../../translation/Translation'
import Technology from '../../../models/Technology/Technology'
import {updateHash} from '../../../constants/FuncoesGeraisTS'
import technologies, { getTechnologiesOfFamily } from '../../../models/Technology/Technologies'
import useHashTechnologies, {hashSeparator} from '../../../hooks/useHashTechnologies'
import styled from 'styled-components'
import AppearFromBelow from '../../Animations/AppearFromBelow/AppearFromBelow'


function SeeTechnologyFamily({setSearchTerm} : {setSearchTerm : (searchTerm : string) => void}) {
    
    let Button = styled.button`
        font-size: 120%;
    `
    let Div = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;    
        padding-right: 5vw;
        margin-top: 3em;
    `

    let technologiesHash = useHashTechnologies();
    let technology : Technology;

    if (technologiesHash.length === 1)
        technology = technologies[technologiesHash[0]]
    else return null;

    const onClick = () => {
        let familyTechnologies = getTechnologiesOfFamily(technology);
        updateHash(familyTechnologies.join(hashSeparator));
        setSearchTerm(familyTechnologies.map(t => technologies[t].name).join(' | '))
    }

    return (
        <AppearFromBelow>
            <Div>
                <Button onClick={onClick}>
                    {getTranslatedSentence('relatedTechnologies')}
                </Button>
            </Div>
        </AppearFromBelow>
    )
}

export default SeeTechnologyFamily
