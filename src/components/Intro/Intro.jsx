import "./Intro.css";
import flowerbg from "../../assets/icons/flowerpic.png";

const Intro = () => {
  return (
    <section id="intro-section">
      <div className="intro-text">
        <div>
          Send <span className="flowers-word">Flowers</span>
        </div>
        <div>Like You Mean It</div>
      </div>
      <div className="intro-img">
        <img src={flowerbg} />
      </div>
      <div className="intro-text"></div>
    </section>
  );
};

export default Intro;
