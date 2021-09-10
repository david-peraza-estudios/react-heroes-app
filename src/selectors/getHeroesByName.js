import { heroes } from "../data/heroes"

export const getHeroesByName = ( name = '') => {

    // si el usuario no escribió nada, el value es ''
    if( name === '') {
        return [];
    }
    // pasamos los dos valores a LowerCase para igualarlos
    name = name.toLowerCase();
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name));
}