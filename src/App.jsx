
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import components
import Home from "./components/home/Home"
import Sidebar from "./components/sidebar/Sidebar"
import About from './components/about/About';


function App() {


  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About/>
      </main>
    </>
  )
}

export default App
