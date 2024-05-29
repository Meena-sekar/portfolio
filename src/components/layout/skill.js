import "./skill.scss";

function Skill() {
  return (
    <div id="skill" className="container">
      <h2 className="heading-main">My Skills</h2>
      <div className="skill-wrapper">
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/html.png")}
            alt="html-img"
          />
          <span>Html</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/css.png")}
            alt="css-img"
          />
          <span>CSS3</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/js.png")}
            alt="js-img"
          />
          <span>JS</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/gulp2.png")}
            alt="tech-img"
          />
          <span>Gulp</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/bootstrap.png")}
            alt="tech-img"
          />
          <span>bootstrap</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/atom.png")}
            alt="tech-img"
          />
          <span>React</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/git.png")}
            alt="tech-img"
          />
          <span>Git</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/jquery.png")}
            alt="tech-img"
          />
          <span>Jquery</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/jira.png")}
            alt="tech-img"
          />
          <span>Jira</span>
        </div>
        <div className="skill">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/sass.png")}
            alt="tech-img"
          />
          <span>Sass</span>
        </div>
      </div>
    </div>
  );
}

export default Skill;
