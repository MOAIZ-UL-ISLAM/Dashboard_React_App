import "./topBox.scss";
import { topDealUsers } from "../../data";

const TopBox = () => {
  return (
    <div className="topbox">
      <h1>Top Deals</h1>
      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listitem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="usertext">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <div>
              <span className="amount">${user.amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
