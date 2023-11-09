import React from 'react'

const Menu = () => {
    return (
        <div className="flex justify-between list-none gap-5">
            <li>
                <button>Home</button>
            </li>
            <li>
                <button>Characters</button>
            </li>
            <li>
                <button>Episodes</button>
            </li>
            <li>
                <button>Location</button>
            </li>
        </div>
    )
}

export default Menu
