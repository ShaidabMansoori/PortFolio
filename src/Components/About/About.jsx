import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

function About() {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="left-image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate frontend developer with a strong focus on
              creating clean, efficient, and visually engaging web applications.
              With experience in technologies like{" "}
              <span className="imt">React.js,</span>{" "}
              <span className="imt">TypeScript</span>, and modern{" "}
              <span className="imt">JavaScript</span>, I enjoy transforming
              ideas into functional, intuitive interfaces that enhance user
              experience.{" "}
            </p>

            <p>
              Throughout my journey as a developer, I’ve worked on several
              real-world projects, such as{" "}
              <span className="imt">HealthVisa</span>, a platform that offers
              health-related services, and{" "}
              <span className="imt">Foody Zone</span>, a restaurant website that
              integrates backend data to deliver a seamless experience. These
              projects helped me gain a deep understanding of how to structure
              components, manage state efficiently, and optimize for performance
              and scalability.
            </p>

            <p>
              In addition to technical skills, I bring{" "}
              <span className="imt">creativity</span> and{" "}
              <span className="imt">problem-solving abilities</span> to my work.
              I enjoy finding <span className="imt">innovative solutions</span>{" "}
              to challenging tasks and constantly strive to refine my skills by
              learning the latest technologies and best practices.Working with
              tools like <span className="imt">Ant Design</span> and{" "}
              <span className="imt">styled-components</span>, I am well-versed
              in building <span className="imt">responsive</span> and visually
              compelling layouts.
            </p>

            <p>
              {" "}
              When I’m not coding, you can find me balancing my time between
              playing football, running a shop, and improving my skills by
              creating small personal projects, like a{" "}
              <span className="imt">dice game</span> or learning new libraries.I I
              thrive in environments that foster creativity and collaboration,
              and I’m always eager to tackle new challenges, whether in React.js
              development, UI design, or beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="about-skills">
        <div className="about-skill">
          <p>HTML & CSS</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>React Js</p> <hr style={{ width: "80%" }} />
        </div>
        <div className="about-skill">
          <p>Next Js</p> <hr style={{ width: "70%" }} />
        </div>
        <div className="about-skill">
          <p>JavaScript</p> <hr style={{ width: "85%" }} />
        </div>
        <div className="about-skill">
          <p>TypeScript</p> <hr style={{ width: "70%" }} />
        </div>
      </div>
    </div>
  );
}

export default About;
