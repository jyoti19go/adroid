
import './App.css';
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/Footer';
import Intro from './components/Introduction/Intro';
import Sliding from './components/Sliding/Sliding';
import Form from './components/Form/Form';
import Who from './components/WhoWeAre/Who';
import Different from './components/MakeUsDifferent/MakeUsDifferent';
import OurMission from './components/OurMission/OurMission';
import HowItWorks from './components/HowItWorks/HowItWorks';

function App() {
  return (
    <div>
     <Navbar/>
     <Intro/>
     <Sliding/>
     <Different/>
     <OurMission/>
     <HowItWorks/>
     <Who/>
     <Form/>
     <Footer/>
     
    </div>
  );
}

export default App;
