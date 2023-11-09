// import './App.css'
import Search from './components/NavBar/Search'
import Title from './components/NavBar/Title'
import Menu from './components/NavBar/Menu'

function App() {
    return (
        <div className="flex w-full py-4 justify-around items-center bg-blue text-white">
            <Title />
            <Search />
            <Menu />
        </div>
    )
}

export default App
