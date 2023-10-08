// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Gallery from "./components/Gallery";
import Banner from "./components/Banner";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Gallery />
    </div>
  );
}

export default App;