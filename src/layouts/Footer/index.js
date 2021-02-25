import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-wrap">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
            Copyright © github/IamLing98 
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            {" "}
            Free{" "}
            <a href="https://www.github/IamLing98" target="_blank">
              Me
            </a>{" "}
            from Viet Nam
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
