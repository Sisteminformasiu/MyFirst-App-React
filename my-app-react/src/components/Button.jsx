import { useNavigate } from "react-router-dom";

function Button({ randomNumber }) {
  const navigate = useNavigate();

  const toggleRandom = () => {
    navigate("/my-app-react/createproduct");
    const newRandomNumber = Math.floor(Math.random() * 100);
    console.log(newRandomNumber);
  };

  return (
    <div className="mt-5 text-white pr-12">
      <button
        onClick={() => toggleRandom()}
        className="w-13 h-8 text-sm focus:outline-none rounded-full"
        type="submit"
        style={{ background: "#37517e" }}
      >
        {randomNumber}
      </button>
    </div>
  );
}

export default Button;
