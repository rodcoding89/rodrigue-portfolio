import './App.scss';
import { Header } from './pages/header';
import { Socialmedia } from './pages/social-media';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Project } from './pages/project';
import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Footer } from './pages/footer';
import { ProjectDetail } from './pages/project-detail';
function App() {
  console.log('url',process.env.PUBLIC_URL);
  return (
    <>
    <div className='content'>
      <div className='container'>
        <div className='header-container'>
            <div className='nav'>
              <span className='logo'><img src = {process.env.PUBLIC_URL+'/assets/images/portfolio-logo.png'} alt='logo'/></span>
              <div className='rightNav'>
                <Header/>
                <Socialmedia/>
              </div> 
            </div>
        </div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-detail/:type/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </div>
    </>
  );
}
export default App;
