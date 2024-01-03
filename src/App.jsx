
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components'

const App = () => {

//removed <Feedbacks /> for now
  return (
    <BrowserRouter>
      <div className="realitve z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        
        <div className="realitve z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
