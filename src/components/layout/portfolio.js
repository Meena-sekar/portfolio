import "./portfolio.scss";

function Carousel() {
  return (
    <div className="container" id="portfolio">
      <h2 className="heading-main">Portfolio </h2>
      <p className="heading-sub">
        Here you will find some of the personal and clients projects i've
        worked, where i've also learned alot with aim of high quality
        deliverables within deadline
      </p>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://www.prudentialplc.com/en" className="d-block">
              <img
                src={require("/Users/apple/Desktop/my-portfolio/src/images/prudential.png")}
                alt="portfolio-img"
              />
            </a>
            <a href="https://www.waldenu.edu/" className="d-block">
              <img
                src={require("/Users/apple/Desktop/my-portfolio/src/images/walden.png")}
                alt="portfolio-img"
              />
            </a>
            <a href="https://www.enfamil.com/" className="d-block">
              <img
                src={require("/Users/apple/Desktop/my-portfolio/src/images/enfamil.png")}
                alt="portfolio-img"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="https://madriexcepcional.com/" className="d-block">
              <img
                src={require("/Users/apple/Desktop/my-portfolio/src/images/madri.png")}
                alt="portfolio-img"
              />
            </a>

            <a href="https://www.brickunderground.com/" className="d-block">
              <img
                src={require("/Users/apple/Desktop/my-portfolio/src/images/brick.png")}
                alt="portfolio-img"
              />
            </a>
            <a href="https://www.dermalex.co.uk/" className="d-block">
              <img
                src={require("/Users/apple/Desktop/my-portfolio/src/images/derma.png")}
                alt="portfolio-img"
              />
            </a>
          </div>
          <div className="carousel-item">
            <a
              href="https://explore-space22.netlify.app/"
              className="d-block w-100"
            >
              <img
                src={require("/Users/apple/Desktop/my-portfolio/src/images/spaceExplore.png")}
                alt="portfolio-img"
              />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
