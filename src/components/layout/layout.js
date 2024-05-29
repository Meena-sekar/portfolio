import "./layout.scss";
const job = {
  role: "{ Frontend Developer }",
};

let counts = setInterval(updateCount, 1000);
let upto = 0;

function updateCount() {
  let counter = document.getElementById("counter");
  counter.innerHTML = ++upto + "+";
  if (upto === 4) {
    clearInterval(counts);
  }
}

function About() {
  return (
    <div className="about container" id="about">
      <h2 className="heading-main">About me</h2>
      <h3 className="role">{job.role}</h3>
      <div className="experience">
        <span id="counter"></span>
        <span className="counter">
          Years of <br /> experience
        </span>
      </div>
      <p className="heading-sub">
        I am a motivated and versatile individual, always eager to take on{" "}
        <span className="highlighter">new Challenges</span>. With a passion for
        learning. I am dedicated to
        <span className="highlighter">delivering high-quality</span> results.
        With a positive attitude and a growth mindset, I am ready to make a
        meaningful contribution and achieve great things
      </p>
    </div>
  );
}

export default About;
