import Pokecard from './Pokecard';
import './Pokedex.css';

function Pokedex(props) {
    const pokemon = props.pokemon;
    return (
        <div className='Pokedex'>
            <h1>Pokedex</h1>
            <div className='Pokedex-cards'>
                {/* <Pokecard id={pokemon[0].id} /> */}
                {pokemon.map(p => <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>)}
            </div>
        </div>
    );
}

export default Pokedex;

// {pokemon.map(prop => {
//     <Pokecard id={prop.id} />
// })}
//name={prop.name} type={prop.type} base_experience={prop.base_experience}