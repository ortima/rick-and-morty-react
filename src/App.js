import Search from './components/NavBar/Search'
import NavTitle from './components/NavBar/NavTitle'
import Menu from './components/NavBar/Menu'
import Cards from './components/Cards/Cards'
import { useState } from 'react'

function App() {
    let [pageNumber, setPageNumber] = useState(1)

    return (
        <div className="w-full h-screen">
            <div className="flex py-4 justify-around items-center bg-gray-600 text-white">
                <NavTitle />
                <Search />
                <Menu />
            </div>
            <div className="container w-5/6 mx-auto mt-7">
                <h2 className="text-4xl font-semibold text-center mb-7">
                    Welcome to Rick and Morty React App!
                </h2>
                <Cards />
            </div>
        </div>
    )
}

export default App
