import React, { useState } from 'react'
import useCharacters from '../../hooks/useCharacters'
import Pagination from '../Pagination/Pagination'

const Cards = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { error, loading, data } = useCharacters(pageNumber)

    const handlePageChange = (newPage) => {
        setPageNumber(newPage)
    }

    if (loading) return <div>spinner...</div>
    if (error) return <div>Something went wrong!</div>

    return (
        <div>
            <div className="flex flex-wrap justify-evenly gap-4">
                {data.characters.results.map((character) => (
                    <div
                        key={character.id}
                        className="flex flex-col flex-wrap cursor-pointer pb-5 shadow-xl hover:shadow-2xl transition-all"
                    >
                        <img
                            className="rounded-t-xl"
                            alt={character.name}
                            src={character.image}
                        />
                        <div className="flex flex-col flex-wrap gap-4 py-2 px-2 rounded-b-xl">
                            <h2 className="font-semibold ">{character.name}</h2>
                            <div className="">
                                <p>Status: {character.status}</p>
                                <p>Gender: {character.gender}</p>
                                <p>Location: {character.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination
                currentPage={pageNumber}
                totalPages={data.characters.info.pages}
                onNext={() => handlePageChange(pageNumber + 1)}
                onPrev={() => handlePageChange(pageNumber - 1)}
            />
        </div>
    )
}

export default Cards
