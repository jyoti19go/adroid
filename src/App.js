
import './App.css';
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/Footer';
import Intro from './components/Introduction/Intro';
import Sliding from './components/Sliding/Sliding';
import AboveFooter from './components/AboveFooter/AboveFooter';
import Who from './components/WhoWeAre/Who';
import Different from './components/Different/Different';
import Mission from './components/Mission/Mission';

function App() {
  return (
    <div>
     <Navbar/>
     <Intro/>
     <Sliding/>
     <Different/>
     <Mission/>



     <Who/>
     <AboveFooter/>
     <Footer/>
     
    </div>
  );
}

export default App;
