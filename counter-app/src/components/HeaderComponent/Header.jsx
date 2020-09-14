import React from "react";

const Header = ({ totalCounters }) => {
  return (
    //   Stateless function component
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Items:{" "}
          <span className="badege badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Header;
