import { useState } from "react";
import article from "../datas/articleText";
import Button from "./Button";
import Footer from "./Footer";

function HeaderPage(randomNumber) {
  const [Bahasa, setBahasa] = useState(true);

  const handleBahasa = () => {
    setBahasa((useBahasa) => !useBahasa);
  };

  return (
    <div>
      <div
        className="w-full h-screen font-mono flex justify-center items-center"
        style={{ background: "#37517e" }}
      >
        <div className=" text-left" style={{ width: "661.419px" }}>
          <h1 className="text-5xl font-bold text-white">
            {Bahasa ? article.title2.en : article.title2.id}
          </h1>
          <p className="text-2xl font-medium text-gray-400 pt-4">
            {Bahasa ? article.description2.en : article.description2.id}
            {"   "}
            <button
              className="w-8 h-8 pt-1 pb-1 rounded-full text-center pr-1 pl-1 text-xs text-white focus:outline-none bg-blue-700 hover:bg-blue-900"
              onClick={() => handleBahasa()}
            >
              {Bahasa ? "ID" : "EN"}
            </button>
          </p>
          <div className="flex pl-2">
            <Button randomNumber={(randomNumber = "Get Started")} />
            <Button randomNumber={(randomNumber = "Watch Video")} />
          </div>
        </div>
        <div>
          <img
            className=""
            src="https://lucent-douhua-349595.netlify.app/images/hero-img.png.png"
            alt=""
            width={536}
            height={427}
          />
        </div>
      </div>
      <div
        className="h-44 flex flex-col justify-center items-center gap-y-5"
        style={{ background: "#f3f5fa" }}
      >
        <strong style={{ color: "#37517e" }} className="text-3xl">
          Join Our Newsletter
        </strong>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div>
          <input
            style={{ width: 600 }}
            className="h-8 p-5 rounded-full text-black bg-blue-100 focus:outline-none shadow-md bg-white"
            type="text"
            name="subcribe"
          />
          <div
            style={{ position: "absolute", right: "322px", bottom: "-235px" }}
          >
            <Button randomNumber={(randomNumber = "Subcribe")} />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HeaderPage;
