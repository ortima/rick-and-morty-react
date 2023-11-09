import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <div className="flex border-4 rounded-xl bg-nav-text text-center bg-white">
            <div className="flex items-center w-full max-w-xs">
                <input
                    type="text"
                    placeholder="Поиск персонажей"
                    className="flex-grow outline-none text-blue w-64 px-2"
                    maxLength={25}
                />
                <button>
                    <BiSearch size={21} color={'1e40af'} />
                </button>
            </div>
        </div>
    )
}

export default Search
