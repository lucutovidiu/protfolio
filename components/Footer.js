import React from "react";

const Footer = () => {
  function FooterCard(
    title,
    className,
    link = { anchor: "", target: "_self" }
  ) {
    return (
      <div className="footer_card">
        {link.anchor !== "" ? (
          <a
            href={link.anchor}
            style={{ textDecoration: "none" }}
            target={link.target}
          >
            <div className="title">{title}</div>
            <div className="footer_card_badge">
              <i className={`${className}`} />
            </div>
          </a>
        ) : (
          <>
            <div className="title">{title}</div>
            <div className="footer_card_badge">
              <i className={`${className}`} />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="footer_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <h4>What I do</h4>
            <div className="footer_what_i_do">
              {FooterCard("HTML5", "fab fa-html5")}
              {FooterCard("CSS3", "fab fa-css3-alt")}
              {FooterCard("BootStrap", "fab fa-bootstrap")}
              {FooterCard("React", "fab fa-react")}
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="mt-3">
              &nbsp;&nbsp;&nbsp;
              <q>
                I build secure, interactive websites using above mentioned
                technologies, and I enjoy doing it. And always learning more...
              </q>
            </h6>
          </div>
          <div className="col-md-4">
            <h6 className="mt-3">Contact Me</h6>
            <div className="footer_what_i_do">
              {FooterCard("Email", "far fa-envelope", { anchor: "/contact" })}
              {FooterCard("LinkedIn", "fab fa-linkedin", {
                anchor: "https://www.linkedin.com/in/ovidiu-lucut-911962174",
                target: "_blank"
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
