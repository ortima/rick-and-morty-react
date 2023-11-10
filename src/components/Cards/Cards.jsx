import React from 'react'
import useCharacters from '../../hooks/useCharacters'

const Cards = () => {
    const { error, loading, data } = useCharacters()
    if (loading) return <div>spinner...</div>
    if (error) return <div>Something went wrong!</div>

    return (
        <div className="flex flex-wrap justify-evenly gap-4">
            {data.characters.results.map((character) => {
                return (
                    <div className="flex flex-col flex-wrap cursor-pointer pb-5 shadow-xl shadow-cyan-500/50 hover:shadow-2xl">
                        <img className="rounded-t-xl" src={character.image} />
                        <div className="flex flex-col flex-wrap gap-4 py-2 px-2 rounded-b-xl">
                            <h2 className="font-semibold ">{character.name}</h2>
                            <div className="">
                                <p>Status: {character.status}</p>
                                <p>Gender: {character.gender}</p>
                                <p>Location:{character.location.name}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards
