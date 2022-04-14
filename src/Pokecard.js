import './Pokecard.css';

function Pokecard (props) {
    return (
        <div className='Pokecard'>
            <h3>{props.name}</h3>
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${props.id.toString().padStart(3,'0')}.png`} />
            <p>Type: {props.type} <br/>
                EXP: {props.base_experience}</p>
        </div>
    );
}

export default Pokecard;