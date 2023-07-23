import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/public/logo.svg" alt="" />
        <span>Users Control</span>
      </div>
      <div className="images">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="exapnd" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notifications" />
          <span>2</span>
        </div>
        <div className="user">
          <img src="/user.jpg" alt="user" />
          <span>Dana</span>
        </div>
        <img src="/setting.svg" alt="" className="setting" />
      </div>
    </div>
  );
};

export default Navbar;
