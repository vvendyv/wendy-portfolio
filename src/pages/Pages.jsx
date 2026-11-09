
import wendyPortrait from '../assets/wendy-portrait.png'
import crystalHaven from '../assets/crystal-haven-preview.png'
import weatherApp from '../assets/weather-app-preview.png'
import crystalBracelet from '../assets/crystal-bracelet-finder-preview.png'
import crystalMeaningTop from '../assets/crystal-meaning-top.png'
import crystalMeaningMiddle from '../assets/crystal-meaning-middle.png'
import crystalMeaningBottom from '../assets/crystal-meaning-bottom.png'
export function About() {
  return (
<main className="content-page">
  <h1>About Me</h1>

  <img
    src={wendyPortrait}
    alt="Illustrated portrait of Wendy"
    className="about-portrait"
  />
      <p className="page-intro">
        Hi! I'm Wendy, and I'm currently learning web development.
        I enjoy being creative and learning how to bring ideas to life
        through websites and applications.
      </p>

      <section className="content-card">
        <h2>My Learning Journey</h2>
        <p>
          Throughout my bootcamp, I've gained experience with HTML,
          CSS, JavaScript, React, Firebase, and APIs. Each project
          has helped me develop my skills and become more confident
          in creating websites.
        </p>
      </section>

      <section className="content-card">
        <h2>My Goals</h2>
        <p>
          My goal is to continue improving my coding skills, explore
          new technologies, and create websites that are both
          functional and enjoyable to use.
        </p>
      </section>
    </main>
  )
}

export function Skills() {
  const skills = [
    ['HTML', 'Creating the structure and content of web pages.'],
    ['CSS', 'Styling websites and creating responsive layouts.'],
    ['JavaScript', 'Adding interactive features and functionality.'],
    ['React', 'Building reusable components and user interfaces.'],
    ['Firebase', 'Working with authentication and databases.'],
    ['APIs', 'Connecting applications to external data and services.']
  ]

  return (
    <main className="content-page">
      <h1>My Skills</h1>
      <p className="page-intro">
        Here are some of the technologies and tools I've learned
        and used throughout my web development bootcamp.
      </p>

      <div className="skills-grid">
        {skills.map(([name, description]) => (
          <div className="content-card" key={name}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>

      <section className="content-card">
        <h2>Putting My Skills Into Practice</h2>
        <p>
          I've applied these skills through four projects,
          including an interactive crystal quiz, an online
          gemstone shop, and a weather application.
        </p>
      </section>
    </main>
  )
}


export function Projects() {
  const projects = [
    {
      name: 'Crystal Haven',
      description: 'A gemstone shop with account creation and login.',
      details: 'Built using React and Firebase.',
      image: crystalHaven
    },
    {
      name: 'Weather App',
      description: 'A weather dashboard displaying current conditions and forecasts.',
      details: 'Built with React and the OpenWeather API.',
      image: weatherApp
    },
    {
      name: 'Crystal Compass',
      description: 'An interactive website exploring crystal meanings, properties, and uses.',
      details: 'Built using HTML, CSS, JavaScript, and jQuery.',
      images: [
        crystalMeaningTop,
        crystalMeaningMiddle,
        crystalMeaningBottom
      ]
    },
    {
      name: 'Crystal Bracelet Finder',
      description: 'An interactive personality quiz that recommends crystal bracelets.',
      details: 'Built with HTML, CSS, JavaScript, and jQuery.',
      image: crystalBracelet
    }
  ]

  return (
    <main className="content-page">
      <h1>My Projects</h1>
      <p className="page-intro">
        Here are four projects I've completed during my
        web development bootcamp.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="content-card project-card" key={project.name}>
            <span className="project-number">PROJECT 0{index + 1}</span>
            <h2>{project.name}</h2>

            {project.image && (
              <img
                src={project.image}
                alt={`${project.name} website preview`}
                className="project-image"
              />
            )}

            {project.images && (
              <div className="project-gallery">
                {project.images.map((image, imageIndex) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${project.name} screenshot ${imageIndex + 1}`}
                    className="project-image"
                  />
                ))}
              </div>
            )}

            <p>{project.description}</p>
            <p>{project.details}</p>
          </div>
        ))}
      </div>
    </main>
  )
}


export function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    alert('Thank you for your message!')
    event.target.reset()
  }

  return (
    <main className="content-page">
      <h1>Get In Touch</h1>
      <p className="page-intro">
        I'd love to hear from you! Feel free to send me a message.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Your message" required />

        <button type="submit">Send Message</button>
      </form>
    </main>
  )
}
