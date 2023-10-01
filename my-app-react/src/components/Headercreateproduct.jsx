import { useState } from "react";
import article from "../datas/articleText";

function HeaderCreate() {
  const [Bahasa, setBahasa] = useState(true);

  const handleBahasa = () => {
    setBahasa((useBahasa) => !useBahasa);
  };

  return (
    <div>
      <div className="absolute top-32">
        <img
          className="mx-auto"
          src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png"
          alt=""
          width={120}
          height={120}
        />
        <h1 className="text-4xl font-semibold text-black text-center">
          {Bahasa ? article.title.en : article.title.id}
        </h1>
        <p className="w-7/12 text-center mx-auto pt-2">
          {Bahasa ? article.description.en : article.description.id}
          {"   "}
          <button
            className="w-8 h-8 pt-1 pb-1 rounded-full text-center pr-1 pl-1 text-xs text-white focus:outline-none bg-blue-700 hover:bg-blue-900"
            onClick={() => handleBahasa()}
          >
            {Bahasa ? "ID" : "EN"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default HeaderCreate;
