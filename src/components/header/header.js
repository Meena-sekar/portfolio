import "./header.scss";
import women from "/Users/apple/Desktop/my-portfolio/src/images/woman.png";
const toggleBtn = document.querySelector(".toggler");
const menuPanel = document.querySelector(".menu");
const menuItem = ["About-me", "Technical", "Projects", "Contact"];

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  if (toggleBtn.classList.contains("active")) {
    menuPanel.style.display = "block";
  } else {
    menuPanel.style.display = "none";
  }
});

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="https://anywhere.epam.com/en/blog/front-end-developer-portfolio">
          <img src={women} alt="" />
        </a>
      </div>
      <div className="toggler">
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
