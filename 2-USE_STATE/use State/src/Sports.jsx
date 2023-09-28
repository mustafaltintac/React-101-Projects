import futbol from './images/futbol.png'
import basketbol from './images/basketbol.png'
import voleybol from './images/voleybol.png'
import hentbol from './images/hentbol.png'

const sportMap={
    // futbol:futbol,
    // basketbol:basketbol,
    // voleybol:voleybol,
    // hentbol:hentbol
    futbol,
    basketbol,
    voleybol,
    hentbol

}

function Sports(props){
    return (
        <div className='sport'> 
            <img src={sportMap[props.sportName]} alt="" />
        </div>
    )
}

export default Sports