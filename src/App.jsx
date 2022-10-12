import reactLogo from './assets/react.svg';
import './App.css';
import gsap from 'gsap';

function App() { 

    return (
        <div className="App">
            <div className="flex flex-col w-full items-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo w-[200px] h-[200px]" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react w-[200px] h-[200px]"
                        alt="React logo"
                    />
                </a>
            </div>
        </div>
    )
}

export default App
