
import './App.css'
import Main from './components/navbar/MainComponent';
import NavbarService from './components/navbar/NavbarService';

function App() {
  // demo links
  // const links = [
  //   { name: 'Home', href: '#' },
  //   { name: 'About Us', href: '#' },
  //   { name: 'Services', href: '#' },
  //   { name: 'Our Team', href: '#' },
  //   { name: 'Testimonials', href: '#' },
  // ];
  //demo data for home element

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
