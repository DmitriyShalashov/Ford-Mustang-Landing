import './App.css';
import MainBanner from './components/UI/MainBanner'
import NavBar from './components/UX/NavBar'
import Description from './pages/Description';
import Features from './pages/Features';
import Help from './pages/Help';
import Params from './pages/Params';
import Photo from './pages/Photo';

function App() {
  return (
 
    <div className="App bg-white">
        <MainBanner/>
        <NavBar/>
        <Description/>
        <Photo/>
        <Params/>
        <Features/>
        <Help/>
    </div>

  );
}

export default App;
