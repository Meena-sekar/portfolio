import "./banner.scss";

const myName = {
  name: "MEENA SEKAR ",
  role: "{ Coder }",
};

function Banner() {
  return (
    <div className="bannerWrapper" id="home">
      <div className="itsMe"></div>
      <div className="bannerContent">
        <h1 className="name">
          <span>✌🏻</span>
          <em>Hey, I'm </em>
          <br />
          {myName.name}
        </h1>
        <p>{myName.role}</p>
      </div>
    </div>
  );
}

export default Banner;
