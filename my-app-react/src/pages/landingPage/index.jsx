import React from "react";
import Navbar from "../../components/Navbar";
import HeaderPage from "../../components/Headerlandingpage";

function LandingPage() {
  return (
    <div className="w-full">
      <div>
        <Navbar
          home={"Home"}
          features={"Features"}
          pricing={"Pricing"}
          faqs={"FAQs"}
          about={"About"}
        />
      </div>
      <div>
        <HeaderPage />
      </div>
    </div>
  );
}

export default LandingPage;
