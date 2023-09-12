import './App.css';
import { harvardArt } from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <GalleryNavigation galleries={harvardArt.records}/>
      </header>
    </div>
  );
}

export default App;
