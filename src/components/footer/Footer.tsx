import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main">
        <div className="links">
          <p>
            <a href="">Contact</a>
          </p>
          <p>
            <a href="">Privacy Policy</a>
          </p>
          <p>
            <a href="">Term of Use</a>
          </p>
          <p>
            <a href="">Preferences</a>
          </p>
        </div>
        <div className="logo">
          <img src="/facebook.svg" alt="facebook" />
          <img src="/linkedin.svg" alt="linkedin" />
          <img src="/github.svg" alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
