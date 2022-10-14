import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const KnowledgeBaseBlog = () => {
  const [blogData, setBlogData] = useState({});
  const { id } = useParams();

  const getBlogData = () => {
    axios.get(`https://printertales.herokuapp.com/blog/${id}`).then((res) => {
      setBlogData(res.data);
    });
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="blogMain-container">
      <div className="blogLeft-side">
        <h1 className="blog-heading">{blogData.title}</h1>
        <div className="blogImage-div">
          <img className="blogDesImage" src={blogData.image} />
        </div>
        <div className="date-views-div">
          <h4>
            <i className="fa fa-user blogIcons" aria-hidden="true"></i>{" "}
            {blogData.author}
          </h4>
          <h4>
            {" "}
            <i className="fa fa-calendar blogIcons" aria-hidden="true"></i>
            {blogData.date}
          </h4>
          <h4>
            <i className="fa fa-eye blogIcons" aria-hidden="true"></i>Views: 32
          </h4>
        </div>
        <div className="blog-desc">
          <p className="blog-desc-pera">
            When the control panel displays
            <span className="blog-desc-pera-span"> {blogData.title}</span>{" "}
            {blogData.desc}
            <span className="blog-desc-pera-span">
              {" "}
              Use Printer Offline
            </span>{" "}
            feature. It is not possible to get rid of those errors entirely.
            However, some essential tricks will help you from time to time if
            you are a regular user. In this guide, you will get to know why this
            issue occurs and how to resolve it within minutes.
          </p>
          <h3 className="blog-desc-discuss">
            Before we discuss the solutions, let’s get to know why this issue
            occurs.
          </h3>
          <h1 className="blog-desc-queries">{blogData.title}</h1>
          <p className="blog-desc-pera">
            In some rare cases, your printing device will be set offline under
            the properties settings automatically. So, to understand or
            investigate which cause is troubling the printer, go to
            <span className="blog-desc-pera-span">
              {" "}
              Devices and Printers
            </span>{" "}
            In this section, right-click your Printer option and select
            Properties. If you see
            <span className="blog-desc-pera-span"> Printer Offline</span>{" "}
            enabled, simply turn it off. Yet, there can be more reasons for this
            error; find them below.
          </p>
          <ul className="blog-desc-ul">
            <li>Driver Issues (unsupportive or outdated)</li>
            <li>Hardware Drawbacks</li>
            <li>Weak Connectivity</li>
            <li>Weak Connectivity</li>
            <li>Security Software Issues</li>
          </ul>
          <p className="blog-desc-pera">
            First, verify your printing device and find which one is your
            printing device problem. Now that you have details on the offline
            error mode, you can start with the solutions below.
          </p>
          <h1 className="blog-desc-queries">
            How to Resolve Lexmark Printer Stuck Offline Issue on Mac?
          </h1>
          <p className="blog-desc-pera">
            If you have recently switched the operating system, you can
            encounter an offline issue on your Mac device, including the reasons
            mentioned earlier. If the technical defect is not resolved via hard
            reset, perform the methods below.
          </p>
          <h2 className="blog-desc-methods">
            Method 1: Check the Connection Cables
          </h2>
          <ul className="blog-desc-ul">
            <li>Ensure to verify the cables connected to the PC or printer.</li>
            <li>They must be in fine condition.</li>
            <li>If there is a faulty cable, replace it with a new one.</li>
          </ul>
          <h2 className="blog-desc-methods">
            Method 2: Check the Network Connection
          </h2>
          <ul className="blog-desc-ul">
            <li>Check the TCP/ IP address of your printer.</li>
            <li>On the command prompt, type your address.</li>
            <li>Check if the embedded web server is accessible.</li>
          </ul>{" "}
          <h2 className="blog-desc-methods">Method 3: Delete Print Jobs</h2>
          <ul className="blog-desc-ul">
            <li>
              On your device, tap the{" "}
              <span className="blog-desc-pera-span"> Apple Menu</span>.{" "}
            </li>
            <li>
              Then, go to{" "}
              <span className="blog-desc-pera-span"> System Preferences</span>.
            </li>
            <li>Now, you are required to navigate to the printer.</li>
            <li>
              On your printing device, open the{" "}
              <span className="blog-desc-pera-span"> Print Queue</span>.
            </li>
            <li>Choose the print job you have aligned.</li>
            <li>Then, you will need to delete them all.</li>
          </ul>
          <h2 className="blog-desc-methods">
            Method 4: Update the Printer Driver
          </h2>
          <ul className="blog-desc-ul">
            <li>
              Go to the <span className="blog-desc-pera-span"> Apple Menu</span>
              .{" "}
            </li>
            <li>Then, open the utility program on your device.</li>
            <li>Go to the product update list.</li>
            <li>Next, choose the driver you require.</li>
            <li>Now, the drivers will update automatically.</li>
          </ul>
        </div>
      </div>
      <aside className="blogRight-aside">
        <div>
          <div className="aside-topBar">
            <div className="topBtn-center">
              <button className="aside-topBtn">Book Free Consultation </button>
            </div>
          </div>
          <div>
            <h3 className="aside-heading">Fix Your Lexmark Printer Now</h3>
            <ul className="aside-list">
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer Driver
                </a>
              </li>
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Book A Service
                </a>
              </li>
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer Job Stuck In Queue
                </a>
              </li>
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer Setup Issue
                </a>
              </li>
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer Offline
                </a>
              </li>{" "}
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer Code Errors
                </a>
              </li>{" "}
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer in error state
                </a>
              </li>{" "}
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer Paper Jam
                </a>
              </li>{" "}
              <li>
                <img
                  src="https://printertales.com/public/upload/image/630098a47f1a9_unnamed.gif"
                  width={"30px"}
                  className="aside-arrow"
                />
                <a href="#" className="aside-list-link">
                  Lexmark Printer not connecting
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};
