import "./header.scss";
import women from "/Users/apple/Desktop/my-portfolio/src/images/woman.png";

const menuItem = ["About-me", "Technical", "Projects", "Contact"];

function Header() {
  const show = () => {
    const toggleBtn = document.querySelector(".toggler");
    const menuPanel = document.querySelector(".menu");
    toggleBtn.classList.toggle("active");
    if (toggleBtn.classList.contains("active")) {
      menuPanel.style.display = "block";
    } else {
      menuPanel.style.display = "none";
    }
  };
  return (
    <header>
      <div className="logo">
        <a href="#home">
          <img src={women} alt="" />
        </a>
      </div>

      <div className="toggler" onClick={show}>
        <span className="humberger-icon"></span>
      </div>
      <div className="menu">
        <ul className="menu-wrapper">
          <li className="menu-list">
            <a href="#about" className="menu-item about-me">
              {menuItem[0]}
            </a>
            <a href="#skill" className="menu-item technical ">
              {menuItem[1]}
            </a>
            <a href="#portfolio" className="menu-item projects">
              {menuItem[2]}
            </a>
            <a href="#contact" className="menu-item contact">
              {menuItem[3]}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
