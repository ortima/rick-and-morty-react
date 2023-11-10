import Search from './components/NavBar/Search'
import Title from './components/NavBar/Title'
import Menu from './components/NavBar/Menu'
import Cards from './components/Cards/Cards'

function App() {
    return (
        <div className="w-full h-screen">
            <div className="flex py-4 justify-around items-center bg-blue text-white">
                <Title />
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
