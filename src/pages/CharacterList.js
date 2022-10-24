import React from 'react'
import { Link } from 'react-router-dom'
import { UseCharacters } from '../hooks/useCharacters'
import './charactersList.css'

const CharacterList = () => {
    const { error, loading, data } = UseCharacters()
    console.log({ error, loading, data })
    if (loading) return <div>loading...</div>
    return (
        <div className='charactersList'>
            {data.characters.results.map((character) => (

                <Link to={`/${character.id}`}>
                    <img src={character.image} width="240px" height="230px" />
                    <h2>{character.name}</h2>
                </Link>
            ))}
        </div>
    )
}

export default CharacterList