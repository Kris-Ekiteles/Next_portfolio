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
          A MERN stack developer passionate about building full-cycle applications. I bridge the gap between front-end elegance and back-end robustness, delivering seamless and dynamic user experiences.
        </p>
      </div>
      <hr></hr>
      <div className="projects">
        
       <Card />
      </div>
    </div>
  );
}
