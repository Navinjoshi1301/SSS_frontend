
import './App.css'
import Main from './components/MainComponent';
import NavbarService from './components/navbar/NavbarService';

function App() {

  return (
    <div>
      {/* Navbar component */}
    <NavbarService/>
      {/* main component */}
     <Main/>
    </div>
  );
}

export default App
