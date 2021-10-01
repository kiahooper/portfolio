import './globalStyles/App.scss';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import ScrollPagination from './components/ScrollPagination/ScrollPagination';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import { useState, useEffect } from 'react';



function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleElement, setVisibleElement] = useState("home");

  useEffect(() => {

    const components = document.querySelectorAll(".sections > *");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElement(entry.target.id);
        }
        
      })
    }, {    
      root: document.querySelector(".sections"),
      rootMargin: '0px',
      threshold: 0.5
    });

    components.forEach(component => {
      observer.observe(component);
    })

    return () => {
      components.forEach(component => {
        observer.unobserve(component);
      })
    }
  }, []);

  return (
    <div className={"app " + `app_${visibleElement}`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} visibleElement={visibleElement} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ScrollPagination visibleElement={visibleElement}/>
      <SocialSidebar />
      <div className="sections">
        <Home visibleElement={visibleElement} />
        <Projects visibleElement={visibleElement} />
        <About visibleElement={visibleElement}/>
        <Contact visibleElement={visibleElement}/>
      </div>
    </div>
  );
}

export default App;