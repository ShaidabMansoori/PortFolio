import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function MyWork() {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>Some of my Projects</h1>
        <img src={theme_pattern} alt="Work-Image" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="work-image" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow-icon" />
      </div>
    </div>
  );
}

export default MyWork;
