import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myheader from './Components/Myheader';
import Mycard from './Components/Mycard';
import Section1 from './Components/Section1';
import About from './Components/About';
import Myowl from './Components/Myowl';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
         <Myheader></Myheader>
         <Section1></Section1>
         <About></About>
         <Myowl></Myowl>
         <Footer></Footer>
    </div>
  );
}

export default App;
