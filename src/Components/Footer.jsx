import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="printertales-side">
          <div className="companyLogo-footer">
            <img
              src="https://printertales.com/public/storage/site/62678d54d73dd_268778-logo.png"
              alt="company logo"
            />
          </div>
          <p className="about-footer">
            At Printer Tales, our goal is to provide you with quick and working
            solutions to your printer issues every time you reach out to us. We
            are available 24/7 because printers can show errors at any time of
            the day. We are not related to any printer manufacturing company in
            any way.
          </p>
          <div className="socialMedia-icons">
            <a
              href="##https://www.facebook.com/Printertales/"
              className="footer-icons"
            >
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>

            <a
              href="##https://www.instagram.com/printer.tales/"
              className="footer-icons"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="##https://twitter.com/Printertales2"
              className="footer-icons"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="##https://www.linkedin.com/company/printertales/"
              className="footer-icons"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="##https://pinterest.com/printertales/"
              className="footer-icons"
            >
              <i className="fa fa-pinterest" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="company-side">
          <h1 className="footer-heading">Company</h1>
          <Link to={"/"} className="section-linkes">
            Home
          </Link>
          <br />
          <Link to={"/knowledge"} className="section-linkes">
            Knowledge Base
          </Link>
          <br />
          <Link to={"/support"} className="section-linkes">
            Support
          </Link>
          <br />
          <Link to={"/contact_us"} className="section-linkes">
            Contact Us
          </Link>
          <br />
        </div>
        <div className="issue-side">
          <h1 className="footer-heading">Our Works</h1>
          <a href="##" className="section-linkes">
            Solutions to 3 Common Epson Printer Error Codes
          </a>
          <br />
          <a href="##" className="section-linkes">
            How to Easily Update HP Printer Firmware?
          </a>
          <br />
          <a href="##" className="section-linkes">
            How to fix printer offline issue
          </a>
        </div>
        <div className="contact-side">
          <h1 className="footer-heading">Contact Info</h1>
          <div>
            <h2 className="emailId">EMAIL</h2>
            <a href="##" className="contactLinkes">
              info@printertales.com
            </a>
          </div>
          <div className="contact-nums">
            <h2 className="contact">CONTACT</h2>
            <a href="##" className="contactLinkes">
              US +1-877-469-0297
            </a>
            <a href="##" className="contactLinkes">
              UK +44-800-054-8150
            </a>
          </div>
          <div>
            <h2 className="address">ADDRESS</h2>
            <a href="##" className="contactLinkes">
              698 NE 1st Ave, Miami FL 33132
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-policy">
        <div className="copyright-div">
          <span> Copyright © 2022. Designed by</span>{" "}
          <a href="https://portfolio-site-ashen.vercel.app/" target={"_blank"}>Alok Kumar</a>
        </div>
        <div className="copyright-div">
          <a href="##">Privacy Policy</a>
          <a href="##">Terms Of Use</a>
        </div>
      </div>
    </>
  );
};
