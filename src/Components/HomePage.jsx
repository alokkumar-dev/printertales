import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Crousel } from "./Crousel";

export const HomePage = () => {
  const [blogData, setBlogData] = useState([]);

  const getBlogData = () => {
    axios.get("http://localhost:8080/blog").then((res) => {
      setBlogData(res.data.slice(2, 6));
    });
  };
  useEffect(() => {
    getBlogData();
  }, []);
  return (
    <div className="homeContainer">
      <div className="homeCrousel">
        <Crousel />
      </div>
      <div className="supportCard-container">
        <div className="supportCard">
          <div className="supportImg">
            <img
              src="https://printertales.com/public/upload/home/62bc5d937690b_home-sec.jpg"
              alt="printertales"
            />
          </div>
          <div className="supportDes">
            <h2 className="support-heading">Why Choose Our Support Service?</h2>
            <p className="support-pera">
              Our support team of certified and experienced printer experts
              provides solutions to all kinds of printer issues. We provide
              troubleshooting guides for almost all top printer brands,
              including HP, Canon, Brother, Epson, Panasonic, Toshiba, Samsung,
              Fujitsu, Xerox, etc. We are available 24/7 to answer your queries
              in real-time as a printer can show errors anytime. With Printer
              Tales, you’ve expert help right at your fingertips whenever and
              wherever you want. Just give us a call any time of the day, and
              we’ll ensure that your printer issue gets solved as soon as
              possible.
            </p>
          </div>
        </div>
      </div>
      <div className="learningCard-container">
        <h1 className="learning-heading">Learning and training</h1>
        <div className="learningCard-maping">
          {blogData.map((item, index) => (
            <LearningCart
              imageUrl={item.image}
              title={item.title}
              description={item.desc}
              id={item._id}
              key={index}
            />
          ))}
        </div>
      </div>
      <div className="affiliate-section">
        <h1 className="affiliate-heading">Affiliate Disclosure</h1>
        <p className="affiliate-desc">
          Printer Tales is a platform where you find all kinds of
          printer-related details and support services. We help our customers
          fix issues related to their Canon, HP, Brother, FUJITSU, Epson, Ricoh,
          Panasonic, Toshiba, Lexmark, Kyocera, XEROX, or any other known
          brand’s printer. Printer Tales is not related to any of these brands
          in any way. Our only relationship is with our customers who use the
          information on our website to resolve their printer problems. The
          information available on this platform can get changed, added to, or
          deleted from our end at any time. Though the content on the Printer
          Tales website is for solving the errors faced by printer users, we
          will not be responsible for any kind of damage that occurs to your
          product while following our solution guides. Printer Tales assumes no
          responsibility for any kind of omissions or errors in the content as
          some of the content on this site is on an “as is” basis with no
          guarantee of accuracy, completeness, and usefulness.
        </p>
      </div>
    </div>
  );
};

const LearningCart = (props) => {
  return (
    <div className="learningCart">
      <div className="learningImgDiv">
        <Link to={`/knowledge/${props.id}`}>
          <img
            src={props.imageUrl}
            alt="tranding-images"
            className="learningImg"
          />
        </Link>
      </div>
      <div className="learningDescDiv">
        <h1 className="learningTitle-heading">{props.title}</h1>
        <p className="learningTitle-desc">{props.description}</p>
        <Link to={`/knowledge/${props.id}`} className="trandingLink">
          BROWSE TRAINING OPTIONS{" "}
        </Link>
        <span className="arrow">⮞</span>
      </div>
    </div>
  );
};
