import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="main" key={item.id}>
          <span className="title">{item.title.toUpperCase()}</span>
          {item.listItems.map((listitem) => (
            <Link to={listitem.url} className="list-item" key={listitem.id}>
              <img src={listitem.icon} alt="home" />
              <span className="item-title">{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
