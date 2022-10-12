import { KnowledgeBaseBlog } from "../KnowledgeBase-blog";
import { KnowledgeBase } from "../KnowledgeBase";
import { Routes, Route } from "react-router-dom";
import { AllPrinters } from "../AllPrintes";
import ResponsiveAppBar from "../Navbar";
import { ContactUs } from "../ContactUs";
import { HomePage } from "../HomePage";
import { Support } from "../Support";
import { Footer } from "../Footer";
import "../../StyleSheets/HomePage.css";

export const AllRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/printers" element={<AllPrinters />} />
        <Route path="/knowledge" element={<KnowledgeBase />} />
        <Route path="/knowledge/:id" element={<KnowledgeBaseBlog />} />
      </Routes>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
