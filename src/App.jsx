
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import components
import Home from "./components/home/Home"
import Sidebar from "./components/sidebar/Sidebar"
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';


function App() {


  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About/>
        <Services />
        <Resume/>
      </main>
    </>
  )
}

export default App
