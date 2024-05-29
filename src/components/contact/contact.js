import "./contact.scss";

function Contact() {
  return (
    <div className="contact-block container" id="contact">
      <h2 className="heading-main"> contact me</h2>
      <div className="contact-wrapper">
        <a href="mailto:meenasekarj26@gmail.com" className="mailto">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/gmail.png")}
            alt="mail-img"
            className="mail"
          />
          meenasekarj26@gmail.com
        </a>

        <div className="call-wrap">
          <img
            src={require("/Users/apple/Desktop/my-portfolio/src/images/call.png")}
            alt="phone-img"
            className="call"
          />
          +91 9941170336
        </div>
      </div>
      <span className="copyrights">
        Built From Scratch With 💕 © Copyright 2022, Meenu. All Rights
        Reserved.   
      </span>
    </div>
  );
}

export default Contact;
