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
              href="https://www.facebook.com/Printertales/"
              className="footer-icons">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
            </a>

            <a
              href="https://www.instagram.com/printer.tales/"
              className="footer-icons">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/Printertales2"
              className="footer-icons">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/printertales/"
              className="footer-icons">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a
              href="https://pinterest.com/printertales/"
              className="footer-icons">
              <i className="fa fa-pinterest" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="company-side">
          <h1 className="footer-heading">Company</h1>
          <a href="#" className="section-linkes">
            Home
          </a>
          <br />
          <a href="#" className="section-linkes">
            Knowledge Base
          </a>
          <br />
          <a href="#" className="section-linkes">
            Support
          </a>
          <br />
          <a href="#" className="section-linkes">
            Contact Us
          </a>
          <br />
        </div>
        <div className="issue-side">
          <h1 className="footer-heading">Issues We Resolve</h1>
          <a href="#" className="section-linkes">
            Solutions to 3 Common Epson Printer Error Codes
          </a>
          <br />
          <a href="#" className="section-linkes">
            How to Easily Update HP Printer Firmware?
          </a>
          <br />
          <a href="#" className="section-linkes">
            How to fix printer offline issue
          </a>
          <br />
          <a href="#" className="section-linkes">
            How to Reset Epson Laser Printer? [A Complete Guide]
          </a>
          <br />
          <a href="#" className="section-linkes">
            How to Connect Epson Printer to WiFi? [Step-by-Step]
          </a>
          <br />
          <a href="#" className="section-linkes">
            How to Fix Epson Printer Filter Failed Error on Mac OS?
          </a>
        </div>
        <div className="contact-side">
          <h1 className="footer-heading">Contact Info</h1>
          <div>
            <h2 className="emailId">EMAIL</h2>
            <a href="#" className="contactLinkes">
              info@printertales.com
            </a>
          </div>
          <div className="contact-nums">
            <h2 className="contact">CONTACT</h2>
            <a href="#" className="contactLinkes">
              US +1-877-469-0297
            </a>
            <a href="#" className="contactLinkes">
              UK +44-800-054-8150
            </a>
          </div>
          <div>
            <h2 className="address">ADDRESS</h2>
            <a href="#" className="contactLinkes">
              698 NE 1st Ave, Miami FL 33132
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-policy">
        <div className="copyright-div">
          <span> Copyright © 2022. Designed by</span>{" "}
          <a href="#">Printertales</a>
        </div>
        <div className="copyright-div">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
        </div>
      </div>
    </>
  );
};
