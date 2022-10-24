import { gql, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react'

const GET_CHARACTER_LOCATION = gql`
query GetCharacterLocation($name:String!){
    characters(filter:{
        name: $name
    }){
        results{
            location{
                name
            }
        }
    }
}
`
const Search = () => {
    const [name, setName] = useState("");
    const [getLocations, { data, error, loading, called }] = useLazyQuery(GET_CHARACTER_LOCATION, {
        variables: {
            name
        }
    })
    console.log({ data, error, loading, called })
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()} >Search</button>
            {data && (
                <ul>
                    {data.characters.results.map(character => (
                        <li>{character.location.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Search