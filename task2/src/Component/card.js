import React from "react";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://c.tenor.com/0iK9a1WkT40AAAAM/loading-white.gif"
        alt="Loading.."
        className="loader"
      />
    </div>
  ) : (
    <div className="row " id="main">
      {users.map((user) => (
        <div className="col-sm-6 col-md-4">
          <div className="info">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <p>ID: {user.id}</p>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
