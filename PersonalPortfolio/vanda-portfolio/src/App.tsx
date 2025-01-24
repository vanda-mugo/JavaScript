import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Services } from './components/Services/Services';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Banner />
      < Skills />
      <Services />
    </div>
  )
}

export default App
