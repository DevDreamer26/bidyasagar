
import './App.css';

function App() {
  return (
    <>
      <div className="profile">
        <div className="about">

          <div className="nameImage"><p>
            <h1 style={{ textAlign: "center" }}>Bidyasagar Hazarika</h1>
            I am a third-year B.Tech undergraduate student in the Department of Electronics and Communication Engineering at <a href="https://aec.ac.in/">Assam Engineering College, Guwahati.</a>
            I am passionate about software development and enjoy coding.
          </p>
            <div className="profileImg">
              <img
                src="assets/Bidya-SH.png"
                alt="Bidyasagar Profile"
              />
            </div></div>

          <p className="social-links">
            <a href="mailto:bidyasagarhazarika@gmail.com">Mail</a>
            <a href="https://www.linkedin.com/in/bidyasagar22" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.github.com/DevDreamer26" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://bidyasagarresume.tiiny.site/" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
          <div className="update">
            <h2>Updates</h2>
            <ul>
              <li>
                <b>From July 10, 2024, to Present:</b> Working as an intern at <a href="https://www.linkedin.com/company/jalyan" target='blank'><i>Jalyan Innovations Pvt. Ltd.,</i></a>
                building a smart mobile app that provides data analytics for fish farmers using the no-code platform <a href="https://www.flutterflow.io/"><i>FlutterFlow,</i></a>also
                managing websites and backend systems.
              </li>
              <li>
                <b>From March 2024 to August 2024:</b> Academic Summer Intern at the <a href="https://www.iitg.ac.in/"><i>Indian Institute of Technology, Guwahati</i></a>.
                My project involved prototyping a wireless data collection and management system for long-term sensing of
                environmental variables at remote locations.
              </li>
              <li>
                <b>July 2023:</b> Started freelance web development.
              </li>
            </ul>
          </div>
          <div className="learnings">
            <h2>Learnings</h2>
            <ul>
              <li><b>January 5, 2025:</b> <i>Learning mobile app development using Flutter.</i></li>

              <li><b>July 10, 2024:</b> <i>Started learning FlutterFlow (a low-code mobile development platform) and Firebase.</i></li>

              <li><b>June 28, 2023:</b><i> Began learning ReactJS for web development projects. Some projects are available on my resume and GitHub.</i></li>

              <li><b>October 1, 2022:</b><i> Learned the fundamentals of computer networks and hacking.</i></li>

              <li><b>April 2021:</b> <i>"Hello World !" </i></li>
            </ul>
          </div>
          <div className="services">
            <h2>Services</h2>

            I build websites and mobile apps. Feel free to contact me for exciting projects or ideas.

            <br />
            Contact no: +91 8822009123
            <br />
            <a href="mailto:bidyasagarhazarika@gmail.com">bidyasagarhazarika@gmail.com</a>

          </div>
        </div>

      </div>
      <div className="footer">
        Last updated on [January 08, 2025]. © Bidyasagar
      </div>
    </>
  );
}

export default App;
