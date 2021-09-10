import React, { useMemo } from 'react'
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history, location }) => {

    // igualamos q a '' para que no aparezca el valor undefined
    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = values;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            onClick={(e) => handleSearch(e)}
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results</h4>
                    <hr />
                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with { q } 
                        </div>
                    }
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
