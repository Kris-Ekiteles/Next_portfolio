import Image from "next/image";
import styles from "./page.module.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="main-page">
      <div className="view">
        <h3>Hello, I'm Kris</h3>
        <p>full stack developer $ UX/UI enthusiast</p>
        <button className="btn">view my work</button>
      </div>
      <div className="hero">
        <h3>Who am i ?</h3>
        <p>
          A MERN stack developer passionate about building full-cycle
          applications. I bridge the gap between front-end elegance and back-end
          robustness, delivering seamless and dynamic user experiences.
        </p>
      </div>
      <hr></hr>
      <div className="projects">
        <Card />
      </div>
      <div className="services-container">
        <div className="services" id="service-1">
          <h4>web and mobile apps</h4>
          <p>turning your ideas into functional digital experience, combining design and technology to solve user needs across devices.</p>
        </div>
        <div className="services" id="service-2">
          <h4>Web and mobile app hosting</h4>
          <p>
            Provide the essential infrustructure to store, serve and manage
            digital content, Ensuring accessibility, performance and security
            for users worldwide.
          </p>
        </div>
        <div className="services" id="service-3">
          <h4>SEO marketing</h4>
          <p>
            Strategically enhancing website visibility in orgarnic search
            results, driving targeted traffic without paid advertising. By
            optimizing content and technical elements.
          </p>
        </div>
      </div>
    </div>
  );
}
