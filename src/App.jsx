
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { About, Skills, Projects, Contact } from './pages/Pages'
import './App.css'

function Home() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>
          <h1>Hi, I'm Wendy!</h1>
          <h2>Web Development Student</h2>
          <p>
            Welcome to my portfolio! Here you can explore my web development
            journey, the skills I've learned, and the projects I've created
            throughout my bootcamp.
          </p>
          <Link to="/projects" className="primary-button">
            View My Projects
          </Link>
        </div>
        <div className="hero-decoration">
          <span>✦</span>
          <div className="hero-circle">W</div>
          <span>✧</span>
        </div>
      </section>

      <section className="feature-section">
        <Link to="/projects" className="feature-card">
          <h3>My Projects</h3>
          <p>Explore the websites and applications I've built.</p>
        </Link>
        <Link to="/about" className="feature-card">
          <h3>About Me</h3>
          <p>Learn more about me and my learning journey.</p>
        </Link>
        <Link to="/skills" className="feature-card">
          <h3>My Skills</h3>
          <p>Discover the tools and technologies I've learned.</p>
        </Link>
      </section>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio">
        <nav className="navbar">
          <Link to="/" className="brand">Wendy's Portfolio</Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer>
          <p>© 2026 Wendy's Web Development Portfolio</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
