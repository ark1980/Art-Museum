import { Route } from "react-router-dom";
import "./App.css";
import { harvardArt } from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GalleryNavigation galleries={harvardArt.records} />
        <Switch>
          <Route exact path="/">
            <h2>Harvard Art Museum</h2>
            <p>Look, but Don't Touch. Please select a Gallery in the navigation bar</p>
          </Route>
          <Route path="/galleries/:galleryId">
            <GalleryView galleries={harvardArt.records} />
          </Route>
          <Route>
            <h2>404 Page Not Found</h2>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
