import './App.css';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Faq } from './components/Faq';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Services/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
