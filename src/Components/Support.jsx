import { Link } from "react-router-dom";

export const Support = () => {
  return (
    <div className="supportMain-container">
      <div className="mainHeading-div">
        <h1 className="support-heading">
          GET YOUR SOLUTIONS JUST{" "}
          <span className="support-heading-blue">ANSWER</span> BELOW{" "}
          <span className="support-heading-blue">QUESTIONS</span>:
        </h1>
        <div className="support-heading-line"></div>
      </div>
      <div className="support-main">
        <div className="support-left-side">
          <h4 className="support-left-heading">
            Q1. PLEASE SELECT THE BRAND OF YOUR PRINTER
          </h4>
          <div className="support-brands-main">
            <div className="support-brands">
              <div className="printerImg-div">
                <img
                  src="https://printertales.com/public/assets/images/logo/hp.png"
                  alt="printers"
                  className="printers"
                />
              </div>
            </div>
            <div className="support-brands">
              <div className="printerImg-div">
                <img
                  src="https://printertales.com/public/assets/images/logo/canon.png"
                  alt="printers"
                  className="printers"
                />
              </div>
            </div>{" "}
            <div className="support-brands">
              <div className="printerImg-div">
                <img
                  src="https://printertales.com/public/assets/images/logo/epson.png"
                  alt="printers"
                  className="printers"
                />
              </div>
            </div>
            <div className="support-brands">
              <div className="printerImg-div">
                <img
                  src="https://printertales.com/public/assets/images/logo/brother.png"
                  alt="printers"
                  className="printers"
                />
              </div>
            </div>
            <div className="support-brands">
              <div className="printerImg-div">
                <img
                  src="https://printertales.com/public/assets/images/logo/xerox.png"
                  alt="printers"
                  className="printers"
                />
              </div>
            </div>
            <div className="support-brands">
              <div className="printerImg-div">
                <img
                  src="https://printertales.com/public/assets/images/logo/other.png"
                  alt="printers"
                  className="printers"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="support-right-side">
          <h3 className="support-answer">YOUR ANSWER</h3>
          <div className="selected-printer-div">
            <h5>Your Selected Printer</h5>
          </div>
        </div>
      </div>
      <div className="support-bottom-div">
        <h5>
          No. I would like to resolve the issue myself -{" "}
          <Link to={"/contact_us"} className="support-call-link">
            Click here
          </Link>
          .
        </h5>
      </div>
    </div>
  );
};
