import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="main-page">
      <div className="view">
        <h3>Hello, I'm Kris</h3>
        <p>full stack developer $ UX/UI enthusiast</p>
        <button className="btn">view my work</button>
      </div>
      <div className="hero">
        <h3>this is the hero section</h3>
      </div>
    </div>
  );
}
