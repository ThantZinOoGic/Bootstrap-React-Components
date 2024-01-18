import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavSection from './NavSection';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FooterSection from './FooterSection';

function App() {
  return (
    <div className='col-12 col-md-6 mx-auto'>
      <NavSection/>
      <HomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
