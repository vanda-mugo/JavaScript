import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Services } from './components/Services/Services';
import SplashCursor from  './components/SplashCursor/SplashCursor';

function App() {

  return (
    <div className='App'>
      < SplashCursor />
      <NavBar />
      <Banner />
      < Skills />
      <Services />
    </div>
  )
}

export default App


//      < SplashCursor />
