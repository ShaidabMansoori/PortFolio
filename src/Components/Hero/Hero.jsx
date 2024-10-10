import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="profile_image"></img>
      <h1>
        <span className="imp">I am Shaidab Mansoori</span>, frontend developer
        based in India
      </h1>
      <p>
        Frontend Developer with a Passion for Building Interactive Web
        Experiences As a frontend developer, I specialize in creating clean,
        user-friendly, and responsive web interfaces using modern technologies
        like <span className="impt">&nbsp;React.js</span>,
        <span className="impt">&nbsp;Next.Js</span>,
        <span className="impt">&nbsp;Javascript</span> and
        <span className="impt">&nbsp;TypeScript</span>. I have worked on real-world
        projects like <span className="impt">HealthVisa</span>, a platform for
        health-related services, and <span className="impt">Foody Zone</span>, a
        restaurant website with both frontend and backend integration. I enjoy
        translating design into functional code and constantly strive to enhance
        my skills by taking on new challenges. With a strong foundation in
        JavaScript, CSS, and React.js, I'm excited to contribute to innovative
        projects that deliver great user experiences.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
