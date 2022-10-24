import React from 'react'
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter'
import "./Character.css";
const Character = () => {
    const { id } = useParams();
    const { error, loading, data } = useCharacter(id)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Something went wrong...</div>
    return (
        <div className='Character'>
            <div>

                <img src={data.character.image} width={650} height={650} />
                <h1>Name:  {data.character.name}</h1>
                <h4>Gender:  {data.character.gender}</h4>
            </div>
            <div className='Character_episodes'>
                {data.character.episode.map((eps) => (
                    <div>
                        {eps.name}  --   <b>{eps.episode}</b>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Character